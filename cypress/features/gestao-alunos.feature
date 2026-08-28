Scenario: Edição de um aluno existente
    Given que sou usuário autenticado na tela de alunos
    When eu clico na opção de editar em um aluno específico na lista
    And altero os dados permitidos no formulário
    And clico no botão para salvar
    Then o sistema atualiza as informações do aluno
    And exibe uma mensagem de sucesso
    And a lista reflete os dados atualizados

Scenario: Exclusão de um aluno bem sucedida
    Given que sou usuário autenticado na tela de alunos
    When eu clico na opção de excluir um aluno específico
    And o sistema exibe a modal de confirmação
    And eu confirmo a exclusão
    Then o sistema remove o aluno
    And exibe uma mensagem de sucesso
    And o aluno não é mais exibido na lista de registros

Scenario: Navegação pela paginação da lista de alunos
    Given que sou usuário autenticado na tela de alunos
    And estou na primeira página da lista de alunos
    When eu navego pelas páginas da lista de alunos
    Then o sistema exibe cada página corretamente
    And cada página apresenta pelo menos um aluno