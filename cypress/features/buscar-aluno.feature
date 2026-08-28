Scenario: Busca de alunos com resultados
    Given que sou usuário autenticado na tela de alunos
    When preencho a busca com um dado válido referente ao <filtro>
    Then o sistema filtra a lista de alunos
    And exibe na tela apenas os registros correspondentes à busca

    Examples:
        | filtro    |
        | Nome      |
        | Matrícula |

Scenario Outline: Busca de alunos sem resultados
    Given que sou usuário autenticado na tela de alunos
    When preencho a busca com um dado inexistente referente ao <filtro>
    Then o sistema não retorna resultados para a busca
    And uma mensagem informando que nenhum aluno foi encontrado deve ser exibida

    Examples:
        | filtro    |
        | Nome      |
        | Matrícula |