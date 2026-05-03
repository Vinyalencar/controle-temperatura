# Controle de Temperatura

Projeto de treinamento com React, Node.js, PostgreSQL, Docker, Git/GitHub e arquitetura hexagonal.

A aplicação permite visualizar equipamentos e alterar o setpoint de temperatura. O frontend se comunica com uma API Node.js, e a API persiste os dados em um banco PostgreSQL.

## Tecnologias

- React
- Vite
- Node.js
- Express
- PostgreSQL
- Docker
- Docker Compose
- Git/GitHub

## Estrutura Do Projeto

```text
controle-temperatura/
  frontend/
    src/
    Dockerfile
    Dockerfile.dev
    nginx.conf

  backend/
    src/
      application/
      adapters/
      database/
      ports/
      server.js
    Dockerfile
    Dockerfile.dev
    .env.example

  database/
    init.sql

  docker-compose.dev.yml
  docker-compose.prod.yml
  .gitignore
