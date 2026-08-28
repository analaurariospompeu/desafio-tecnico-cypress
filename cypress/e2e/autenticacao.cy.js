describe('Login na aplicação', () => {

  beforeEach(() => {
    cy.visit('https://desafio-qa-gamma.vercel.app/')
  })

  it('Login mal sucedido - dados inválidos', () => {
    cy.get('#matricula')
      .type('2510222')

    cy.get('#senha')
      .type('84751236')

    cy.get('#login-submit-btn').click()

    cy.get('#form-feedback')
      .should('be.visible')
      .and('contain', 'Ops! Algo de errado aconteceu.')
      .and('contain', 'Verifique se a matrícula e senha estão corretas.')
  })

  it('Login mal sucedido - dados em branco', () => {
    cy.get('#login-submit-btn').click()

    cy.get('#matricula-error')
      .should('be.visible')
      .and('contain', 'Informe a matrícula.')

    cy.get('#senha-error')
      .should('be.visible')
      .and('contain', 'Informe a senha.')
  })

  it('Login bem sucedido', () => {
    cy.get('#matricula')
      .type('2620101')

    cy.get('#senha')
      .type('12345678')

    cy.get('#login-submit-btn').click()

    cy.get('#student-search').should('be.visible')
    cy.get('.students-table').should('be.visible')
  })

  it('Login mal sucedido - matrícula com menos de 7 caracteres numéricos', () => {
    cy.get('#matricula')
      .type('262010')

    cy.get('#senha')
      .type('12345678')

    cy.get('#login-submit-btn').click()

    cy.get('#matricula-error').should('be.visible')
    cy.contains('A matrícula deve ter entre 7 e 9 dígitos numéricos.').should('be.visible')
  })

  it('Login mal sucedido - matrícula com mais de 9 caracteres numéricos', () => {
    cy.get('#matricula')
      .type('2620101236')

    cy.get('#senha')
      .type('12345678')

    cy.get('#login-submit-btn').click()

    cy.get('#matricula-error').should('be.visible')
    cy.contains('A matrícula deve ter entre 7 e 9 dígitos numéricos.').should('be.visible')
  })

  it('Login mal sucedido - senha com menos de 8 caracteres numéricos', () => {

    cy.get('#matricula')
      .type('2620101')

    cy.get('#senha')
      .type('1234567')

    cy.get('#login-submit-btn').click()

    cy.get('#senha-error').should('be.visible')
    cy.contains('A senha deve conter exatamente 8 dígitos numéricos.').should('be.visible')
  })

  it('Logout do sistema', () => {
    cy.fazerLogin()

    cy.get('#logout-button').click()

    cy.get('#login-title').should('be.visible')
    cy.contains('Acesso à Unifor').should('be.visible')
  })
})