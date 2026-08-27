Scenario: Login mal sucedido 
    Given que estou na tela de login da aplicação
    When eu preencho o campo de matrícula com <matricula> 
    And eu preenche o campo de senha com <senha> 
    And clico no botão de acessar 
    Then o sistema exibe uma mensagem de erro correspondente 
    And permaneço na tela de login 
 
    Examples: 
    |     matricula      |       senha      | 
    |  dados inválidos   |  dados inválidos |
    |  dados em branco   |  dados em branco |
 
Scenario: Login bem sucedido
    Given que estou na tela de login da aplicação 
    When eu preencho o campo de matrícula com "2620101" 
    And eu preenche o campo de senha com "12345678" 
    And clico no botão de acessar 
    Then sou redirecionado para a tela de listagem de alunos 
 
Scenario: Cadastro de aluno bem sucedido 
    Given que sou usuário autenticado na tela de alunos
    When eu clico na opção para cadastrar um novo aluno 
    And preencho os campos obrigatórios do formulário com dados válidos 
    And eu clico no botão para salvar 
    Then o sistema cadastra o aluno 
    And exibe uma mensagem de sucesso 
    And o novo aluno passa a ser exibido na lista 
 
Scenario: Busca de alunos com resultados 
    Given que sou usuário autenticado na tela de alunos 
    When preencho a busca com um dado válido referente ao <filtro> 
    Then o sistema filtra a lista de alunos 
    And exibe na tela apenas os registros correspondentes à busca 
 
    Examples: 
    |  filtro   | 
    |   Nome    | 
    | Matrícula |
 
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

Scenario: Logout do sistema 
    Given que sou usuário autenticado no sistema 
    And que estou na tela de alunos 
    When eu clico no botão de sair 
    Then o sistema encerra a minha sessão 
    And sou redirecionado para a tela de acesso à aplicação

// Cenários adicionais

Scenario: Cadastro de aluno mal sucedido - Matrícula já cadastrada
    Given que sou usuário autenticado na tela de alunos
    When eu clico na opção para cadastrar um novo aluno
    And preencho o campo "Matrícula" com uma matrícula já cadastrada
    And preencho os demais campos obrigatórios do formulário com dados válidos
    And eu clico no botão para salvar 
    Then o sistema exibe uma mensagem de erro
    And o sistema não cadastra o aluno