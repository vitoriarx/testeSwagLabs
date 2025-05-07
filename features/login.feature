# language: pt

Funcionalidade: Login 

Cenário: Login Válido
    Dado que eu acesse a página de login
    Quando digitar o nome de usuário 
    Quando digitar a senha 
    Quando clicar no botão de Login
    Então a página de produtos deve ser exibida


Cenário: Login Inválido
    Dado que eu acesse a página de login
    Quando eu digitar o nome de usuário Inválido
    E digitar uma senha inválida
    E clicar no botão de login 
    Então uma mensagem de erro deve ser exibida 
    E não deve permitir que o usuário seja logado 