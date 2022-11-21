# Domain Driven Design Demo

## Introduction

This repository is a simple introduction into the DDD pattern. The technologies used are:
  - NestJS: https://docs.nestjs.com/
  - Angular: https://angular.io/
  - NX: https://nx.dev/

## Installation
There are 3 options for databases
  - MariaDB
  - MongoDB
  - SQLite

Use the docker-compose.yaml file in the local-dev folder to start your database. The default database is MariaDB.
For the MongoDB, a change in the Domain is necessary because of the ID.

```bash
docker-compose -f local-dev/docker-compose.yaml up -d
```

