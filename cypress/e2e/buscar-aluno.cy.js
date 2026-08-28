describe('Buscar alunos', () => {

  it('Busca de alunos com resultados - nome', () => {
    const nomeBusca = 'Laura'

    cy.fazerLogin()

    cy.get('#student-search').type(nomeBusca)

    cy.get('.students-table tbody tr')
      .each(($row) => {
        cy.wrap($row)
          .should('contain', nomeBusca)
      })
  })

  it('Busca de alunos com resultados - matricula', () => {
    const matriculaBusca = '1121105'

    cy.fazerLogin()

    cy.get('#student-search').type(matriculaBusca)

    cy.get('.students-table tbody tr')
      .each(($row) => {
        cy.wrap($row)
          .should('contain', matriculaBusca)
      })
  })

  it('Busca de alunos sem resultados - nome', () => {
    const nomeBusca = 'Liane Mendes'

    cy.fazerLogin()

    cy.get('#student-search').type(nomeBusca)

    cy.contains('Nenhum aluno encontrado.').should('be.visible')
  })

  it('Busca de alunos sem resultados - matricula', () => {
    const matriculaBusca = '2653985'

    cy.fazerLogin()

    cy.get('#student-search').type(matriculaBusca)

    cy.contains('Nenhum aluno encontrado.').should('be.visible')
  })
})