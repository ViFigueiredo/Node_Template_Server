## Sobre:
Template de API REST utilizando NodeJS, KnexJS, MSSQL Server e Testes.

## Funcionalidades:
- Autenticação (Em breve)
- Autorização (Em breve)
- Rotas de usuários
- Upload de arquivos
- Segurança da aplicação (Cors + Helmet + Env)

## Tecnologias:
- Nodejs + Express (Backend)
- Knexjs (Database Query Builder)
- Jest (Testes automatizados)
- ESLinter + Prettier (Linters)

## Instalar Dependências:
npm i

## Executar projeto:
npm run dev

## Testes de rotas do projeto:
npm run test

## knexJS:
-> Criar tabelas no banco de dados  
npx knex migrate:lastest (todas)  
npx knex migrate:up <tabela> (específica)

-> Desfazer tabelas no banco de dados  
npx knex migrate:rollback --all  
npx knex migrate:down <tabela> (específica)
