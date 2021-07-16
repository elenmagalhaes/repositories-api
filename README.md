<img alt="GoStack" src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/header-desafios.png" />

<h3 align="center">
  Desafio 02: Conceitos do Node.js
</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/elenmagalhaes/repositories-backend?color=%2304D361">

  <a href="https://rocketseat.com.br">
    <img alt="Made by Elen Magalhães" src="https://img.shields.io/badge/made%20by-Elen Magalhães-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/elenmagalhaes/repositories-backend/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/elenmagalhaes/repositories-backend?style=social">
  </a>
</p>

<p align="center">
  <a href="#rocket-sobre-o-projeto">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#wrench-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#link-recursos">Recursos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#bulb-evolução-do-projetor">Evolução do projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## :rocket: Sobre o projeto

Neste projeto é simulado uma simples API que permite ao usuário a criação, listagem, atualização e remoção dos repositórios, e além disso, permitir que os repositórios possam receber "likes".

Aplicação criada em cima do [desafio](https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/desafio-conceitos-nodejs) disponibilizado pela Rocketseat.

## :wrench: Tecnologias

- [Node.js](https://nodejs.org/en/about/)
- [Express.js](https://expressjs.com/pt-br/)

## :link: Recursos

### Repositório

``GET - /repositories`` - Listar todos os repositórios

**Resposta:**
| Parâmetro | Tipo    |
|-----------|---------|
|`id`       |*string* |
|`title`    |*string* |
|`url`      |*string* |
|`techs`    |*array*  | 
|`likes`    |*number*  |

``POST - /repositories`` - Criar um novo repositório

**Corpo da requisição:**

| Parâmetro | Tipo    | Obrigatório |
|-----------|---------|-------------|
|`title`    |*string* | x           |
|`url`      |*string* | x           |
|`techs`    |*array*  | x           |

**Resposta:**

| Parâmetro | Tipo    |
|-----------|---------|
|`id`       |*string* |
|`title`    |*string* |
|`url`      |*string* |
|`techs`    |*array*  |
|`likes`    |*number* |

``PUT - /repositories/:id`` - Atualizar um repositório

**Parâmetros de rota:**

| Parâmetro | Tipo    | Obrigatório |
|-----------|---------|-------------|
|`id`       |*string* | x           |

**Corpo da requisição:**

| Parâmetro | Tipo    | Obrigatório |
|-----------|---------|-------------|
|`title`    |*string* | x           |
|`url`      |*string* | x           |
|`techs`    |*array*  | x           |

**Resposta:**

| Parâmetro | Tipo    |
|-----------|---------|
|`id`       |*string* |
|`title`    |*string* |
|`url`      |*string* |
|`techs`    |*array*  |
|`likes`    |*number* |


``DELETE - /repositories/:id`` - Deletar um repositório

**Parâmetros de rota:**

| Parâmetro | Tipo    | Obrigatório |
|-----------|---------|-------------|
|`id`       |*string* | x           |


``POST - /repositories/:id/like`` - Adicionar like a um repositório

**Parâmetros de rota:**

| Parâmetro | Tipo    | Obrigatório |
|-----------|---------|-------------|
|`id`       |*string* | x           |

**Resposta:**

| Parâmetro | Tipo    |
|-----------|---------|
|`id`       |*string* |
|`title`    |*string* |
|`url`      |*string* |
|`techs`    |*array*  |
|`likes`    |*number* |

## :bulb: Evolução do projeto

- [ ] Adicionar rota para detalhar apenas um repositório;
- [ ] Incluir database;
- [ ] Refatorar a estrutura da aplicação (separar os middleware das rotas...)
- [ ] Construir front-end pro projeto
- [ ] Adicionar licença.


## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Feito por Elen Magalhães - **Projeto em construção**

