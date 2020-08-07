# API Proffy

A *API* (Application Programming Interface) é responsável por fornecer e manipular todos os dados da plataforma. 
## Deploy

A api está hospedada na plataforma Heroku e pode ser acessada neste [link](https://erickcreis-proffy.herokuapp.com/).

## Como rodar localmente

```bash
# Vá para a pasta do servidor
$ cd server

# Instale as depedencias
$ yarn install

# Rode a aplicação
$ yarn start
```
Acesse em: http://localhost:3333/

## Documentação

1. **[Aulas](#1-aulas)**\
[Listar aulas](#get-listar-aulas)\
[Criar aula](#post-criar-aula)
2. **[Conexões](#2-conexões)**\
[Mostrar total](#get-mostrar-total-de-conexões-realizadas)\
[Criar conexão](#post-criar-nova-conexão)

## 1. Aulas

#### [GET] Listar aulas

`BASE_URL/classes`

**Descrição**\
Busca por porffy que tem aulas compatíveis com os filtros enviados.

Filtrar por matéria, dia da semana e horários;

#### [POST] Criar aula

`BASE_URL/classes`

**Descrição**\
Cria uma nova aula de acordo com os parâmetro enviados.

**Parâmetros**

```json
{
  "avatar": String,
  "whatsapp": String,
  "bio": String,
  "subject": String,
  "cost": Integer,
  "schedule": [
    {
      "week_day": Integer,
      "from": String,
      "to": String
    }
  ]
}
```

## 2. Conexões

#### [GET] Mostrar total de conexões realizadas

`BASE_URL/connections`

**Descrição**\
Retorna o número de conexões entre alunos e proffys realizados pela plataforma


#### [POST] Criar nova conexão

`BASE_URL/connections`

**Descrição**\
Adiciona uma nova conexão ao total de conexões