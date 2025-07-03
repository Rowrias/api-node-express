# api-node-express
Projeto utilizado no curso da Alura

01. Projeto:
    - baixar ou clonar o projeto no github da Alura.

02. Primeiro comando dps de baixar
    - npm install

03. Conectar com o banco de dados Mongodb
    - configurar o usuario e a senha

04. Rodar o projeto para ver se esta funcionando e conectado com o banco de dados
    - npm run dev

05. Criar um ambiente de variáveis
    - npm install dotenv@16.0.3
    - importar no server.js => import 'dotenv/config'
    - criar na raiz do projeto => .env => e criar a variavel e arrumar no dbConnect.js a variavel
    - adicionar .env no gitignore para esconder as senhas
    - agora pode subir o projeto base para o github

06. Baixar Linter que indentifica erros mais cedo
    - npm init @eslint/config
    - instalar a extensão eslint no vscode.
    - npx eslint . --fix