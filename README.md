# Desafio Técnico - Cypress

Automação de testes E2E para a aplicação de gerenciamento de alunos, utilizando Cypress.

# Organização do projeto

Os testes foram organizados na pasta `cypress/e2e`, separados por grupos de funcionalidades:

- `autenticacao.cy.js`
- `buscar-aluno.cy.js`
- `cadastrar-aluno.cy.js`
- `gestao-de-alunos.cy.js`

Os cenários em Gherkin foram organizados na pasta `cypress/features`, seguindo o mesmo padrão de agrupamento dos testes automatizados. Dessa forma, cada arquivo `.feature` corresponde ao respectivo grupo de funcionalidades dos arquivos `.cy.js`.

# Commands

Foi utilizado o arquivo `cypress/support/commands.js` para centralizar ações repetitivas e facilitar a manutenção dos testes.

Foram criados comandos para:

- Realizar o login completo (`cy.fazerLogin()`);
- Preencher e enviar o formulário de login (`cy.preencherFormsLogin()`);
- Preencher o formulário de cadastro (`cy.preencherCadastro()`).

# Laço de repetição

No cenário de navegação pela paginação, foi utilizado um laço `for` para percorrer as páginas da lista de alunos.

A cada iteração, o teste:

1. Avança para a próxima página;
2. Valida se a página esperada está sendo exibida;
3. Verifica se existem registros na tabela.

# Execução

Instalar as dependências do projeto:

```bash
npm install
```

Abrir o Cypress:

```bash
npx cypress open
```

# Pontos para evoluir

Utilização de fixtures para organização dos dados de teste. Com mais tempo, colocaria os dados utilizados nos testes em arquivos de fixture, evitando deixar matrícula, nome, data de nascimento e senha diretamente no código. Assim, se houver a necessidade de trocar algum dado, não seria necessário alterar o código dos testes.