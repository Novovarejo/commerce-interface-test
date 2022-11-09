import { faker } from '@faker-js/faker';

describe('suite de teste login', () => {
  
  const baseUrl = 'https://commerce-hmg-fiatbarigui.mob1.one/';
  const randonName = faker.name.fullName();
  const randonEmail = faker.internet.email();
  const randonPass = faker.internet.password(6);

  let newfirstName = 'teste'
  let newlastName = 'nvpc'
  let newPhone = '419999876543'
  let newCompany = 'company'
  let newTax = '39181856997'
  let newDocPJ = '12256163000119'
  let newDocPF = '69709634038'
  let Email = 'teste0@teste.com.br'
  let newPass = '123456'

  beforeEach(() => {
  cy.visit(baseUrl);
  })

  it ('6.a - login, entre com email e senha invalidos', () => {
      cy.get('.header-signin-text span').last().parents().first().click()
      cy.get('.modal').should('be.visible');
      cy.get('.modalBody .solidBtn').click();
      cy.get('.modalBody input[name="email"]').type(randonEmail);
      cy.get('.modalBody input[name="password"]').type(randonPass);
      cy.get('.formBottom > .MuiButtonBase-root').should('be.visible');
      cy.get('.formBottom > .MuiButtonBase-root').click({force: true});
      cy.get('#email-helper-text').should('be.visible');
  })

  it ('6.b-c - login, entre com email e senha validos, validar e fazer logout', () => {
    cy.get('.header-signin-text span').last().parents().first().click()
    cy.get('.modal').should('be.visible');
    cy.get('.modalBody .solidBtn').click();
    cy.get('.modalBody input[name="email"]').type(Email);
    cy.get('.modalBody input[name="password"]').type(newPass);
    cy.contains('button', 'Entrar').click();
    cy.contains('a', 'Área VIP').should('be.visible');
    cy.contains('a', 'Área VIP').click();
    cy.wait(1000)
    cy.contains('h2', 'Últimos Pedidos').should('be.visible');
    cy.contains('a', 'Sair').click();
    cy.contains('a', 'Login').should('be.visible');
  })

  it ('6.d-e - login token, email invalido', () => {
    cy.get('.header-signin-text span').last().parents().first().click()
    cy.get('.modal').should('be.visible');
    cy.get('.modalBody .outlineBtn').click();
    cy.get('.modalBody input[name="email"]').type(randonEmail);
    cy.get('.modalBody button[type="submit"]').click(); 
    cy.get('.MuiFormHelperText-root').should('be.visible');
  })
  
  it ('6.d-h - login, token, email válido e codigo inválido.', () => {
    //serviço token off
    cy.get('.header-signin-text span').last().parents().first().click()
    cy.get('.modal').should('be.visible');
    cy.get('.modalBody .outlineBtn').click();  
    cy.get('.modalBody input[name="email"]').type(Email);
    cy.get('.formBottom > .MuiButtonBase-root').click({force: true});
    cy.get('.MuiInputBase-input').should('be.visible');
    cy.get('.modalBody input[name="code"]').type(newPass);
    cy.contains('button', 'Acessar').click();
    cy.get('.MuiFormHelperText-root').should('have.text', 'O código digitado é inválido ou expirou. Verifique e tente novamente.')
  })

});

