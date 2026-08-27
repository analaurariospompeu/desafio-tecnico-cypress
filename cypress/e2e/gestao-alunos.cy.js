describe('Cadastro de alunos', () => {

  it('Cadastro de aluno bem sucedido', () => {
    // Chama o comando fazerLogin (Localizado em commands.js) e realiza a autenticação do usuário
    cy.fazerLogin()

    cy.get('#add-student-button').click()

    cy.get('#register-matricula').type('2650147')
    cy.get('#register-nome').type('Márcia Pereira Moreno')
    cy.get('#register-data').type('2004-05-25')
    cy.get('#register-genero').select('Feminino')

    cy.get('#save-student-button').click()

    cy.get('#toast')
      .and('contain', 'Aluno cadastrado com sucesso!')
  })

  it('Cadastro de aluno mal sucedido - Matrícula já cadastrada', () => {

    cy.fazerLogin()

    cy.get('#add-student-button').click()

    cy.get('#register-matricula').type('1120945')
    cy.get('#register-nome').type('Tiago Paiva')
    cy.get('#register-data').type('2003-12-22')
    cy.get('#register-genero').select('Masculino')

    cy.get('#save-student-button').click()

    cy.contains('Esta matrícula já está cadastrada.').should('be.visible')
  })

  it('Busca de alunos com resultados - nome', () => {
    const alunoBusca = 'Caio'

    cy.fazerLogin()

    cy.get('#student-search').type(alunoBusca)

    cy.get('.students-table tbody tr')
      .each(($row) => {
        cy.wrap($row)
          .should('contain', alunoBusca)
      })
  })

  it('Busca de alunos com resultados - matricula', () => {
    cy.fazerLogin()

    cy.get('#student-search').type('1112089')

    cy.get('.students-table tbody tr')
      .each(($row) => {
        cy.wrap($row)
          .should('contain', '1112089')
      })
  })

  it('Edição de um aluno existente', () => {
    const matriculaAluno = '1120970'
    const novoNome = 'André Ferrari'

    cy.fazerLogin()

    cy.get('#student-search').type(matriculaAluno)

    cy.contains('tr', matriculaAluno)
      .find('.edit-btn')
      .click()

    cy.get('#register-nome').clear()
    cy.get('#register-nome').type(novoNome)

    cy.get('#register-data').type('1998-01-04')

    cy.get('#save-student-button').click()
    cy.get('#toast').and('contain', 'Aluno atualizado com sucesso!')

    cy.get('#student-search').clear()
    cy.get('#student-search').type(matriculaAluno)

    cy.contains('tr', matriculaAluno)
      .should('contain', novoNome)
      .and('contain', '04/01/1998')
  })

  it('Exclusão de um aluno bem sucedida', () => {
    cy.fazerLogin()

    cy.contains('tr', '1121050')
      .find('.delete-btn')
      .click()

    cy.get('.modal-card').should('be.visible')
      .should('contain', '1121050')

    cy.get('#confirm-delete-btn').click()
    cy.get('#toast').and('contain', 'Aluno excluído com sucesso!')

    cy.contains('tr', '1121050')
      .should('not.exist')
  })

  it('Logout do sistema', () => {
    cy.fazerLogin()

    cy.get('#logout-button').click()

    cy.contains('Acesso à Unifor').should('be.visible')
  })
})