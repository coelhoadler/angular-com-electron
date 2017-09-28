# Aplicação com o Electron

Aplicação foi criada com o auxílio do [ng cli](https://cli.angular.io/),rodando dentro do framework [Electron](https://electron.atom.io/). Esse exemplo foi feito para a palestra apresentada na FTD Educação.

## Passos para executar o projeto

* `git clone` nesse repositório
* Execute o `npm i` ou `yarn install` na raiz do projeto
* Se o **S.O** reclamar do `Angular Cli`, instale o mesmo de forma **global** com o seguinte comando : `npm i -g "@angular/cli"`
* Depois execute: 
  - `npm run start` : para subir um **server** (http://localhost:4200)
  - `npm run start:electron` : para subir sua aplicação (em dev) no Electron

## Distribuindo a aplicação <electron-packager>

No `package.json`, criei `4 tasks` referentes ao processo de **build**:

* "build:mac": faz o exporte para mac
* "build:linux": faz o export para linux
* "build:windows": "faz o export para windows
* "build:all" : realiza o export para todas as plataformas

* Obs: Qualquer dúvida, favor me acionar.

[Link do slide](http://slides.com/adlercoelhosantos/angular-com-electron).
