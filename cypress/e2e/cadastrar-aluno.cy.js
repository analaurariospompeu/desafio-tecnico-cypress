describe('Cadastro de alunos', () => {

    beforeEach(() => {
        cy.fazerLogin('2620101', '12345678')
        cy.get('#add-student-button').click()
    })

    it('Cadastro de aluno bem sucedido', () => {

        cy.preencherCadastro('2635658', 'Luana Pereira', '1995-12-12', 'Outro')

        cy.get('#save-student-button').click()

        cy.get('#toast')
            .and('contain', 'Aluno cadastrado com sucesso!')

        cy.get('#student-search').type('2635658')

        cy.get('.students-table tbody').contains('tr', '2635658').should('be.visible')
    })

    it('Cadastro de aluno mal sucedido - Matrícula já cadastrada', () => {

        cy.preencherCadastro('1112069', 'Marcela Maia', '2004-11-08', 'Feminino')

        cy.get('#save-student-button').click()

        cy.get('#register-matricula-error')
        .should('be.visible')
        .and('contain.text', 'Esta matrícula já está cadastrada.')
    })

    it('Cadastro de aluno mal sucedido - Número de matrícula com menos de 7 caracteres', () => {

        cy.preencherCadastro('256814', 'Marcela Maia', '2004-11-08', 'Feminino')

        cy.get('#save-student-button').click()

        cy.get('#register-matricula-error')
        .should('be.visible')
        .and('contain.text', 'A matrícula deve ter entre 7 e 9 dígitos.')
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

        cy.get('#register-matricula-error')
        .should('be.visible')
        .and('contain.text', 'Informe a matrícula.')
    })

    it('Impedir cadastro de aluno sem preencher campo obrigatório - Nome', () => {

        cy.get('#register-matricula').type('25361458')
        cy.get('#register-data').type('2003-12-22')
        cy.get('#register-genero').select('Masculino')

        cy.get('#save-student-button').click()

        cy.get('#register-nome-error')
        .should('be.visible')
        .and('contain.text', 'Informe o nome.')
    })

    it('Impedir cadastro de aluno sem preencher campo obrigatório - Data de nascimento', () => {

        cy.get('#register-matricula').type('25361458')
        cy.get('#register-nome').type('Fernanda Matterera')
        cy.get('#register-genero').select('Feminino')

        cy.get('#save-student-button').click()

        cy.get('#register-data-error')
        .should('be.visible')
        .and('contain.text', 'Informe a data de nascimento')
    })

    it('Impedir cadastro de aluno sem preencher campo obrigatório - Gênero', () => {

        cy.get('#register-matricula').type('25361458')
        cy.get('#register-nome').type('Fernanda Matterera')
        cy.get('#register-data').type('2003-12-22')

        cy.get('#save-student-button').click()

        cy.get('#register-genero-error')
        .should('be.visible')
        .and('contain.text', 'Selecione o gênero')
    })

    it('Cancelar cadastro de aluno', () => {
        cy.preencherCadastro('26154895', 'Micael Torres', '2001-05-25', 'Masculino')

        cy.get('#cancel-register-button').click()

        cy.get('#student-search').should('be.visible')
        cy.get('.students-table').should('be.visible')
       
        cy.get('#student-search').type('2650874')
        cy.contains('Nenhum aluno encontrado.').should('be.visible')
    })
})