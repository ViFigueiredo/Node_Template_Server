## Sobre:
Template de API REST utilizando KnexJS e MSSQL Server

## Tecnologias:
- Nodejs + Express (Backend)
- Knexjs (Database Query Builder)
- Jest (Testes automatizados)
- ESLinter + Prettier (Linters)

## Instalar Dependências:
npm i

## Executar projeto:
npm run dev ou yarn dev

## Testes de rotas do projeto:
npm run test ou yarn test

## knexJS:
-> Criar tabelas no banco de dados
npx knex migrate:lastest (todas)
npx knex migrate:up <tabela> (específica)

-> Desfazer tabelas no banco de dados
npx knex migrate:rollback --all
npx knex migrate:down <tabela> (específica)