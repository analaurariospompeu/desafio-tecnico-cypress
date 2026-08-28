Scenario: Login mal sucedido
    Given que estou na tela de login da aplicação
    When eu preencho o campo de matrícula com <matricula>
    And eu preenche o campo de senha com <senha>
    And clico no botão de acessar
    Then o sistema exibe uma mensagem de erro correspondente
    And permaneço na tela de login

    Examples:
        | matricula       | senha           |
        | dados inválidos | dados inválidos |
        | dados em branco | dados em branco |

Scenario: Login bem sucedido
    Given que estou na tela de login da aplicação
    When eu preencho o campo de matrícula com "2620101"
    And eu preenche o campo de senha com "12345678"
    And clico no botão de acessar
    Then sou redirecionado para a tela de listagem de alunos

Scenario: Logout do sistema
    Given que sou usuário autenticado no sistema
    And que estou na tela de alunos
    When eu clico no botão de sair
    Then o sistema encerra a minha sessão
    And sou redirecionado para a tela de acesso à aplicação

Scenario: Login mal sucedido - matrícula com menos de 7 caracteres numéricos
    Given que estou na tela de login da aplicação
    When eu preencho o campo de matrícula com menos de de 7 caracteres numéricos
    And informo uma senha válida
    And clico no botão "Acessar"
    Then o sistema deve informar que a matrícula deve conter entre 7 e 9 caracteres numéricos

Scenario: Login mal sucedido - matrícula com mais de 9 caracteres numéricos
    Given que estou na tela de login da aplicação
    When eu preencho o campo matrícula com mais de 9 caracteres numéricos
    And informo uma senha válida
    And clico no botão "Acessar"
    Then o sistema deve informar que a matrícula deve conter entre 7 e 9 caracteres numéricos

Scenario: Login mal sucedido - senha com menos de 8 caracteres numéricos
    Given que estou na tela de login da aplicação
    When eu preencho o campo matrícula com uma matrícula válida
    And informo uma senha com menos de 8 caracteres
    And clico no botão "Acessar"
    Then o sistema deve informar que a senha deve conter exatamente 8 caracteres numéricos