const express = require("express");
const cors = require("cors");

const { v4: uuid, validate: isUuid } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

function validateRepositoryID(request, response, next) {
  const { id } = request.params;

  if(!isUuid(id)){
    return response.status(400).json({ error: 'Repository ID not exist.'});
  }

  return next();
}

app.get("/repositories", (request, response) => {
  return response.status(200).json(repositories);
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body;
  const repository = { id: uuid(), title, url, techs, likes: 0 }

  repositories.push(repository);

  return response.status(200).json(repository);
});

app.put("/repositories/:id", validateRepositoryID, (request, response) => {
 const { id } = request.params;
 const { title, url, techs } = request.body;
 const repository = { id, title, url, techs };

 const { likes } = repositories.find(r => r.id === id);
 const repositoryIndex = repositories.findIndex(r => r.id === id);

 if(repositoryIndex < 0){
  return response.status(400).json({ error: 'Repository not found.'});
 }

 repositories[repositoryIndex] = repository;
 repositories[repositoryIndex].likes = likes;

 return response.status(200).json(repository);
});

app.delete("/repositories/:id", (request, response) => {
  const { id } = request.params;

  const repositoryIndex = repositories.findIndex(r => r.id === id);

  if(repositoryIndex < 0){
    return response.status(400).json({ error: 'Repository not found.'});
  }

  repositories.splice(repositoryIndex, 1);

  return response.status(204).send();

});

app.post("/repositories/:id/like", (request, response) => {
  const { id } = request.params;

  const repository = repositories.find(r => r.id === id);

  if(!repository) {
    return response.status(400).json({ error: 'Repository not found.'});
  }

  repository.likes += 1;

  return response.status(200).json(repository);
});

module.exports = app;
