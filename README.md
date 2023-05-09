# Setup NodeJs com TS

O projeto initial-setup-node-ts é um template inicial para criação de projetos Node.js com TypeScript. Ele inclui configurações de linting, testes com Jest e ambiente de desenvolvimento com Nodemon e TS-Node. O projeto também utiliza o pacote dotenv para gerenciar variáveis de ambiente e express para criação de rotas HTTP.

## Stack utilizada

**Back-end:** Node, Express, Jest, Nodemon, dotEnv e etc...

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar a seguinte variável de ambiente no seu .env, mas se não quiser o projeto irá rodar por padrão na porta `:3030`

`PORT`

## Rodando os testes

Para rodar os testes, rode os seguintes comandos

```bash
  yarn test
```

Testes padrões, irá ser executado mesmo que não haja testes

---

```bash
  yarn test:watch
```

Irá ficar assistindo a aplicação a todo momento e executando os testes sempre que algum arquivo for alterado

---

```bash
  yarn test:staged
```

Irá realizar teste apenas no arquivo que foi alterado e não em todos os testes da aplicação

---

```bash
  yarn test:push
```

Executa os testes antes de ser realizado o push da aplicação e gera um relatório de cobertura de código dos testes executados pelo Jest, detalhando a porcentagem de cobertura de código de cada arquivo do projeto (porcentagem indica quais linhas de código foram percorridas pelo teste, e quais linhas não foram)

## Flow de commits

Setup estruturado visano do melhor cenário possivel onde apenas é possivel efetuar um comentário ele sendo semantico, ou seja seguindo um padrão de nomenclatura para as mensagens.

**Exemplo**

- \<tipo>(\<escopo>): <descrição>

Sendo o **_\<tipo>(\<escopo>)_** um dos exemplos a seguir

- feat (Adição de funcionalidade)
- fix (Correção de defeito).
- docs (Mudança em documentação)
- style (Mudança de formatação ou estilo, que não afeta a execução do código)
  - Exemplos: espaço, tabulação, etc.
- refactor (Mudança na organização do código, que não afeta o comportamento existente)
- test (Adição ou mudança de um teste)
- chore (Adição ou mudança em script de build, que não afeta o código de produção)
- perf (Mudança de código para melhoria de desempenho)
- ci (Mudança de configuração de integração contínua)
- build (Mudança em arquivos de build ou em dependências externas)
- temp (Commit temporário, que não deve ser incluído no CHANGELOG)

- scope: (Opcional, pode ser qualquer coisa que especifique o escopo da mudança)

  - Exemplos: subpacote, workspace, módulo, componente, página.

- subject (Breve resumo da mudança, escrito no tempo verbal presente. Começa com letra minúscula e não há ponto final)

## Dependencias

**Dependências:**

- "dotenv": "^16.0.3" - biblioteca para carregar variáveis de ambiente do arquivo ".env"
- "express": "^4.18.2" - framework para construção de aplicativos web em Node.js

**Dev-dependencies:**

- "@types/express": "^4.17.17" - tipos para o Express
- "@types/jest": "^29.5.1" - tipos para o Jest
- "@types/node": "^20.1.1" - tipos para o Node.js
- "@typescript-eslint/eslint-plugin": "^5.59.5" - plugin do ESLint para TypeScript
- "@typescript-eslint/parser": "^5.59.5" - parser do ESLint para TypeScript
- "eslint": "^8.40.0" - ferramenta para análise de código
- "eslint-config-prettier": "^8.8.0" - configuração do ESLint para funcionar com o Prettier
- "git-commit-msg-linter": "^5.0.4" - ferramenta para validação das mensagens de commit
- "husky": "^8.0.3" - ferramenta para automatização de tarefas em Git hooks
- "jest": "^29.5.0" - framework de testes para JavaScript
- "lint-staged": "^13.2.2" - ferramenta para automatizar a execução de linters em arquivos com alterações staged
- "nodemon": "^2.0.22" - ferramenta para reiniciar automaticamente o servidor quando houver alterações no código
- "prettier": "^2.8.8" - ferramenta para formatação de código
- "ts-jest": "^29.1.0" - plugin do Jest para TypeScript
- "ts-node": "^10.9.1" - ferramenta para executar arquivos TypeScript
- "tsc-alias": "^1.8.6" - ferramenta para criação de aliases em caminhos de arquivos TypeScript
- "tsconfig-paths": "^4.2.0" - ferramenta para resolução de caminhos de arquivos TypeScript
- "typescript": "^5.0.4" - compilador TypeScript

## Autor

- [@samuelrms](https://github.com/samuelrms)

![Logo](https://portifolio-samuel-rms.cdn.prismic.io/portifolio-samuel-rms/157f75df-8910-4713-96ec-1538617f4fa3_AvatarAndIconsAvatar.svg)
