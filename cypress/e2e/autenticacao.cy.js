describe('Login na aplicação', () => {

  it('Login mal sucedido - dados inválidos', () => {
    cy.preencherFormsLogin('2510222', '84751236')

    cy.get('#form-feedback')
      .should('be.visible')
      .and('contain.text', 'Ops! Algo de errado aconteceu.')
      .and('contain.text', 'Verifique se a matrícula e senha estão corretas.')
  })

  it('Login mal sucedido - dados em branco', () => {
     cy.visit('https://desafio-qa-gamma.vercel.app/')

    cy.get('#login-submit-btn').click()

    cy.get('#matricula-error')
      .should('be.visible')
      .and('contain.text', 'Informe a matrícula.')

    cy.get('#senha-error')
      .should('be.visible')
      .and('contain.text', 'Informe a senha.')
  })

  it('Login bem sucedido', () => {
    cy.preencherFormsLogin('2620101', '12345678')

    cy.get('#student-search').should('be.visible')
    cy.get('.students-table').should('be.visible')
  })

  it('Login mal sucedido - matrícula com menos de 7 caracteres numéricos', () => {
    cy.preencherFormsLogin('262010', '12345678')

    cy.get('#matricula-error')
      .should('be.visible')
      .and('contain.text', 'A matrícula deve ter entre 7 e 9 dígitos numéricos.')
  })

  it('Login mal sucedido - matrícula com mais de 9 caracteres numéricos', () => {
    cy.preencherFormsLogin('2620101365', '12345678')

    cy.get('#matricula-error')
      .should('be.visible')
      .and('contain.text', 'A matrícula deve ter entre 7 e 9 dígitos numéricos.')
  })

  it('Login mal sucedido - senha com menos de 8 caracteres numéricos', () => {

    cy.preencherFormsLogin('2620101', '987654')

    cy.get('#senha-error')
      .should('be.visible')
      .and('contain.text', 'A senha deve conter exatamente 8 dígitos numéricos.')
  })

  it('Logout do sistema', () => {
    cy.fazerLogin('2620101', '12345678')

    cy.get('#logout-button').click()

    cy.get('#login-title')
      .should('be.visible')
      .and('contain.text','Acesso à Unifor')
  })
})