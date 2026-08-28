describe('Cadastro de alunos', () => {

    beforeEach(() => {
        cy.fazerLogin()
        cy.get('#add-student-button').click()
    })

    it('Cadastro de aluno bem sucedido', () => {

        cy.get('#register-matricula').type('2650147')
        cy.get('#register-nome').type('Jonas Ribeiro')
        cy.get('#register-data').type('2004-05-25')
        cy.get('#register-genero').select('Masculino')

        cy.get('#save-student-button').click()

        cy.get('#toast')
            .and('contain', 'Aluno cadastrado com sucesso!')

        cy.get('#student-search').type('2650147')

        cy.get('.students-table tbody tr')
            .each(($row) => {
                cy.wrap($row)
                .should('contain', '2650147')
            })
    })

    it('Cadastro de aluno mal sucedido - Matrícula já cadastrada', () => {

        cy.get('#register-matricula').type('1120945')
        cy.get('#register-nome').type('Tiago Paiva')
        cy.get('#register-data').type('2003-12-22')
        cy.get('#register-genero').select('Masculino')

        cy.get('#save-student-button').click()

        cy.get('#register-matricula-error').should('be.visible')
        cy.contains('Esta matrícula já está cadastrada.').should('be.visible')
    })

    it('Cadastro de aluno mal sucedido - Número de matrícula com menos de 7 caracteres', () => {

        cy.get('#register-matricula').type('265987')
        cy.get('#register-nome').type('Tiago Paiva')
        cy.get('#register-data').type('2003-12-22')
        cy.get('#register-genero').select('Masculino')

        cy.get('#save-student-button').click()

        cy.get('#register-matricula-error').should('be.visible')
        cy.contains('A matrícula deve ter entre 7 e 9 dígitos.').should('be.visible')
    })

    it('Cadastro de aluno - Impedir inserção de mais de 9 dígitos no número de matrícula', () => {

        cy.get('#register-matricula').type('2654365987')

        cy.get('#register-matricula').should('have.value', '265436598')
    })

    it('Impedir cadastro de aluno sem preencher campo obrigatório - Matricula', () => {

        cy.get('#register-nome').type('Tiago Paiva')
        cy.get('#register-data').type('2003-12-22')
        cy.get('#register-genero').select('Masculino')

        cy.get('#save-student-button').click()

        cy.get('#register-matricula-error').should('be.visible')
        cy.contains('Informe a matrícula.').should('be.visible')
    })

    it('Impedir cadastro de aluno sem preencher campo obrigatório - Nome', () => {

        cy.get('#register-matricula').type('25361458')
        cy.get('#register-data').type('2003-12-22')
        cy.get('#register-genero').select('Masculino')

        cy.get('#save-student-button').click()

        cy.get('#register-nome-error').should('be.visible')
        cy.contains('Informe o nome.').should('be.visible')
    })

    it('Impedir cadastro de aluno sem preencher campo obrigatório - Data de nascimento', () => {

        cy.get('#register-matricula').type('25361458')
        cy.get('#register-nome').type('Fernanda Matterera')
        cy.get('#register-genero').select('Feminino')

        cy.get('#save-student-button').click()

        cy.get('#register-data-error').should('be.visible')
        cy.contains('Informe a data de nascimento').should('be.visible')
    })

    it('Impedir cadastro de aluno sem preencher campo obrigatório - Gênero', () => {

        cy.get('#register-matricula').type('25361458')
        cy.get('#register-nome').type('Fernanda Matterera')
        cy.get('#register-data').type('2003-12-22')

        cy.get('#save-student-button').click()

        cy.get('#register-genero-error').should('be.visible')
        cy.contains('Selecione o gênero').should('be.visible')
    })

    it('Cancelar cadastro de aluno', () => {

        cy.get('#register-matricula').type('2650874')
        cy.get('#register-nome').type('Felipe Ferrano')
        cy.get('#register-data').type('2004-11-15')
        cy.get('#register-genero').select('Masculino')

        cy.get('#cancel-register-button').click()

        cy.get('#student-search').should('be.visible')
        cy.get('.students-table').should('be.visible')
       
        cy.get('#student-search').type('2650874')
        cy.contains('Nenhum aluno encontrado.').should('be.visible')
        
    })
})