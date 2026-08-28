Scenario: Cadastro de aluno bem sucedido
    Given que sou usuário autenticado na tela de alunos
    When eu clico na opção para cadastrar um novo aluno
    And preencho os campos obrigatórios do formulário com dados válidos
    And eu clico no botão para salvar
    Then o sistema cadastra o aluno
    And exibe uma mensagem de sucesso
    And o novo aluno passa a ser exibido na lista

Scenario: Cadastro de aluno mal sucedido - Matrícula já cadastrada
    Given que sou usuário autenticado na tela de alunos
    When eu clico na opção para cadastrar um novo aluno
    And preencho o campo "Matrícula" com uma matrícula já cadastrada
    And preencho os demais campos obrigatórios do formulário com dados válidos
    And eu clico no botão para salvar
    Then o sistema exibe uma mensagem de erro
    And o sistema não cadastra o aluno

Scenario: Cadastro de aluno mal sucedido - Número de matrícula com menos de 7 caracteres
    Given que sou usuário autenticado na tela de alunos
    When eu clico na opção para cadastrar um novo aluno
    And preencho o campo "Matrícula" com uma matrícula com menos de 7 caracteres
    And preencho os demais campos obrigatórios do formulário com dados válidos
    And eu clico no botão para salvar
    Then o sistema exibe uma mensagem de erro
    And o sistema não cadastra o aluno

Scenario: Cadastro de aluno - Impedir inserção de mais de 9 dígitos no número de matrícula
    Given que sou usuário autenticado na tela de alunos
    When eu clico na opção para cadastrar um novo aluno
    And tento informar uma matrícula com mais de 9 dígitos
    Then o sistema deve permitir apenas os 9 primeiros dígitos da matrícula

Scenario Outline: Impedir cadastro de aluno sem preencher campo obrigatório
    Given que sou usuário autenticado na tela de alunos
    When eu clico na opção para cadastrar um novo aluno
    And preencho os campos obrigatórios, exceto "<campo>"
    And clico no botão de cadastrar
    Then o sistema deve informar que o campo "<campo>" é obrigatório

    Examples:
        | campo              |
        | matrícula          |
        | nome               |
        | data de nascimento |
        | gênero             |

Scenario: Cancelar cadastro de aluno
    Given que sou usuário autenticado na tela de alunos
    When eu clico na opção para cadastrar um novo aluno
    When preencho a matrícula com "25361458"
    And preencho o nome com "Fernanda Matterera"
    And preencho a data de nascimento com "2003-12-22"
    And seleciono o gênero "Feminino"
    And clico no botão "Cancelar"
    Then devo ser direcionada para a tela de listagem de alunos
    And o aluno não deve ter sido cadastrado