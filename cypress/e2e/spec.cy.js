describe('Desafio Técnico - Cypress', () => {

  it('Login mal sucedido', () => {
    cy.visit('https://desafio-qa-gamma.vercel.app/')
    cy.get('#matricula')
      .click()
      .type('2620222')
    cy.get('#senha')
      .click()
      .type('12345677')
    cy.get('#login-submit-btn').click()
  })
})