Cypress.Commands.add('fazerLogin', () => {
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