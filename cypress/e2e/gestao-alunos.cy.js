describe('Gestão de operações - Aluno', () => {
    it('Exclusão de um aluno bem sucedida', () => {

        const aluno = '1112176'

        cy.fazerLogin()

        cy.get('#student-search').type(aluno)

        cy.contains('tr', aluno)
            .find('.delete-btn')
            .click()

        cy.get('.modal-card').should('be.visible')
            .should('contain', aluno)

        cy.get('#confirm-delete-btn').click()
        cy.get('#toast').and('contain', 'Aluno excluído com sucesso!')

        cy.get('#student-search').type(aluno)
        cy.contains('Nenhum aluno encontrado.').should('be.visible')

        cy.get('#student-search').clear()
    })

    it('Edição de um aluno existente', () => {
        const matriculaAluno = '1120970'
        const novoNome = 'André Ferrari'
        const novoGenero = 'Prefiro não dizer'

        cy.fazerLogin()

        cy.get('#student-search').type(matriculaAluno)

        cy.contains('tr', matriculaAluno)
            .find('.edit-btn')
            .click()

        cy.get('#register-nome').clear()
        cy.get('#register-nome').type(novoNome)

        cy.get('#register-data').clear()
        cy.get('#register-data').type('1998-01-04')

        cy.get('#register-genero').select(novoGenero)

        cy.get('#save-student-button').click()
        cy.get('#toast').and('contain', 'Aluno atualizado com sucesso!')

        cy.get('#student-search').clear()
        cy.get('#student-search').type(matriculaAluno)

        cy.contains('tr', matriculaAluno)
            .should('contain', novoNome)
            .and('contain', '04/01/1998')
            .and('contain', novoGenero)
    })

    it('Navegação pela paginação da lista de alunos', () => {
        cy.fazerLogin()

        cy.contains('Página 1 de 6').should('be.visible')

        for (let pagina = 2; pagina <= 6; pagina++) {
            cy.get('#next-page').click()

            cy.contains(`Página ${pagina} de 6`)
                .should('be.visible')

            cy.get('.students-table tbody tr')
                .should('have.length.greaterThan', 0)
        }
    })
})