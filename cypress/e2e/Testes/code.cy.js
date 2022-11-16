import { faker } from '@faker-js/faker';
import { first } from 'lodash';

describe('Suite de Teste', () => {
  

  const baseUrl = 'https://commerce-hmg-fiatbarigui.mob1.one/';

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
  
  it('', () => {
    
    for(let clickedIndex = 2; clickedIndex <= 6; clickedIndex++) {
        cy.get(`a.nav-link:nth-child(${clickedIndex})`).click();
        cy.get('.section .product-box-header').should('be.visible');
       }
  })
});