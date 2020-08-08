<div align="center">
  <img src="./.github/assets/banner.png" />

  <img src="https://img.shields.io/badge/Proffy-NLW 2.0-774FD1?style=for-the-badge">

  <img alt="License" src="https://img.shields.io/badge/license-MIT-774FD1?style=for-the-badge">

  > :rocket: Projeto feito para conectar professores e estudantes, feito na Next Level Week #2 @Rocketseat

</div>

___

## 💻 Web

<div align="center">
  <img src="./.github/assets/web-v1.gif" />
</div>

<details>
  <summary>Mais detalhes</summary>
  
  #### :earth_americas: Deploy

  A site está hospedada na plataforma [Vercel](https://vercel.com/) e pode ser acessada neste [link](https://proffy-p1brawzko.vercel.app).

  #### :construction_worker: Como rodar localmente

  ```bash
  # Vá para a pasta web
  $ cd Proffy/web

  # Instale as depedencias
  $ yarn install

  # Rode a aplicação
  $ yarn start
  ```
  Acesse: http://localhost:3000/

</details> 

## 📱 Mobile

<div align="center">
  <img src="./.github/assets/mobile-v1.gif" />
</div>

<details>
  <summary>Mais detalhes</summary>
  
  #### :card_file_box: App Android

  É possivel baixar a apk para Android neste [link](https://github.com/ErickCReis/Proffy/releases/download/v1.0/proffy-v1.apk).

  #### :construction_worker: Como rodar localmente

  ```bash
  # Vá para a pasta mobile
  $ cd Proffy/mobile

  # Instale as depedencias
  $ yarn install

  # Rode a aplicação
  $ yarn start
  ```
  
  Depois disso basta baixar o Expo ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent) ou [IOS](https://apps.apple.com/br/app/expo-client/id982107779)) e ler o QRCode gerado.

</details> 

## 📦 API

<details>
  <summary>Mais detalhes</summary>
  
  #### :earth_americas: Deploy

  A api está hospedada na plataforma [Heroku](https://heroku.com) e pode ser acessada neste [link](https://erickcreis-proffy.herokuapp.com/).

  #### :construction_worker: Como rodar localmente

  ```bash
  # Vá para a pasta do servidor
  $ cd Proffy/server

  # Instale as depedencias
  $ yarn install

  # Rode a aplicação
  $ yarn start
  ```
  Acesse em: http://localhost:3333/

  #### Documentação

  1. **[Aulas](#1-aulas)**\
  [Listar aulas](#get-listar-aulas)\
  [Criar aula](#post-criar-aula)
  2. **[Conexões](#2-conexões)**\
  [Mostrar total](#get-mostrar-total-de-conexões-realizadas)\
  [Criar conexão](#post-criar-nova-conexão)

  ### 1. Aulas

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

  ```bash
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

  ### 2. Conexões

  #### [GET] Mostrar total de conexões realizadas

  `BASE_URL/connections`

  **Descrição**\
  Retorna o número de conexões entre alunos e proffys realizados pela plataforma


  #### [POST] Criar nova conexão

  `BASE_URL/connections`

  **Descrição**\
  Adiciona uma nova conexão ao total de conexões

</details> 

## :bug: Problemas

Fique a vontade **para criar uma nova issue** com o respectivo titulo e descrição na página de issues do [Proffy](https://github.com/ErickCReis/Proffy/issues). Se você já encontrou a solução para o problema, **Eu amaria fazer o review do seu pull request**!

## :tada: Contribuindo

Confira a página de [contribuição](./CONTRIBUTING.md) para ver como começar uma discução e começar a contribuir.

## :closed_book: Licença

Lançado em 2020

Made with love by [Erick Reis](https://github.com/ErickCReis) 🚀.
Esse projeto esta sobre [MIT license](./LICENSE).
