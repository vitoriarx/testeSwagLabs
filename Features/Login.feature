# language: pt

Funcionalidade: Login 

Cenário: Login Válido
    Dado que eu acesse a página de login
    Quando digitar o nome de usuário 
    E digitar a senha 
    E clicar no botão de Login
    Então a página inicial deve ser exibida


Cenário: Login Inválido
    Dado que eu acesse a página de login
    Quando eu digitar o nome de usuário Inválido
    E digitar uma senha inválida
    E clicar no botão de login 
    Então uma mensagem de erro deve ser exibida 
    E não deve permitir que o usuário seja logado 