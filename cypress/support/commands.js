Cypress.Commands.add('fazerLogin', (matricula, senha) => {
    cy.visit('https://desafio-qa-gamma.vercel.app/')
    
    cy.get('#matricula')
      .type(matricula)
    
    cy.get('#senha')
      .type(senha)

    cy.get('#login-submit-btn').click()

    cy.get('#student-search').should('be.visible')
    cy.get('.students-table').should('be.visible')
})

Cypress.Commands.add('preencherFormsLogin', (matricula, senha) => {
    cy.visit('https://desafio-qa-gamma.vercel.app/')
    
    cy.get('#matricula')
      .type(matricula)
    
    cy.get('#senha')
      .type(senha)

    cy.get('#login-submit-btn').click()
})

Cypress.Commands.add('preencherCadastro', (matricula, nome, data, genero) => {

  cy.get('#register-matricula').type(matricula)

  cy.get('#register-nome').type(nome)

  cy.get('#register-data').type(data)

  cy.get('#register-genero').select(genero)
})