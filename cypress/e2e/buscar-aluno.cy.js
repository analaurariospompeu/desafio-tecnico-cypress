describe('Buscar alunos', () => {

    beforeEach(() => {
        cy.fazerLogin('2620101', '12345678')
    })

  it('Busca de alunos com resultados - nome', () => {
    const nomeBusca = 'João'

    cy.get('#student-search').type(nomeBusca)

    cy.get('.students-table tbody').contains('tr', nomeBusca).should('be.visible')
  })

  it('Busca de alunos com resultados - matricula', () => {
    const matriculaBusca = '1121105'

    cy.get('#student-search').type(matriculaBusca)

    cy.get('.students-table tbody').contains('tr', matriculaBusca).should('be.visible')
  })

  it('Busca de alunos sem resultados - nome', () => {
    const nomeBusca = 'Liane Mendes'

    cy.get('#student-search').type(nomeBusca)

    cy.contains('Nenhum aluno encontrado.').should('be.visible')
  })

  it('Busca de alunos sem resultados - matricula', () => {
    const matriculaBusca = '2653985'

    cy.get('#student-search').type(matriculaBusca)

    cy.contains('Nenhum aluno encontrado.').should('be.visible')
  })
})