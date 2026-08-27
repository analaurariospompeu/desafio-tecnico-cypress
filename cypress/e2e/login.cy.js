describe('Login na aplicação', () => {

  it('Login mal sucedido - dados inválidos', () => {
    cy.visit('https://desafio-qa-gamma.vercel.app/')

    cy.get('#matricula')
      .type('2510222')
    
    cy.get('#senha')
      .type('84751236')

    cy.get('#login-submit-btn').click()

    cy.contains('Ops! Algo de errado aconteceu.').should('be.visible')
    cy.contains('Verifique se a matrícula e senha estão corretas').should('be.visible')
  })

  it('Login mal sucedido - dados em branco', () => {
    cy.visit('https://desafio-qa-gamma.vercel.app/')

    cy.get('#matricula')
      .type(' ')
    
    cy.get('#senha')
      .type(' ')

    cy.get('#login-submit-btn').click()

    cy.contains('Informe a matrícula.').should('be.visible')
    cy.contains('Informe a senha.').should('be.visible')
  })

  it('Login bem sucedido', () => {
    cy.visit('https://desafio-qa-gamma.vercel.app/')

    cy.get('#matricula')
      .type('2620101')
    
    cy.get('#senha')
      .type('12345678')

    cy.get('#login-submit-btn').click()

    // Verificar se o usuário foi direcionado corretamente através de elementos da tela de listagem de alunos
    cy.contains('Alunos').should('be.visible')
    cy.get('.students-table').should('be.visible')
  })
})