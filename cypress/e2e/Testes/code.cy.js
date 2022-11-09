import { faker } from '@faker-js/faker';

describe('Suite de Teste', () => {
  
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
  let newPasserror = '1234567'

  beforeEach(() => {
  cy.visit(baseUrl);
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