/// <reference types="Cypress" />
import { faker } from '@faker-js/faker';

describe('suite de teste homepage e menus', () => {
  
  const baseUrl = 'https://commerce-hmg-fiatbarigui.mob1.one/';

  var Cep = '85810150';
  var randomOptionChild = faker.datatype.number({
    'min': 3,
    'max': 5
  });
  const fakeCard = '5194724596016071'
  // validade 22/02/2024
  const fakeCode = '189'

  beforeEach(() => {
  cy.visit(baseUrl);
  })

  it('teste siteloja', () => {
    var Email = 'teste0@teste.com.br';
    var Pass = '123456';
    cy.login(Email, Pass);
    //wait para o modal fechar
    cy.wait(2000);
    cy.contains('button', 'Aceitar e fechar').click();
    cy.wait(2000);
    cy.get('.slick-track .slick-active a.section.product-box-header')
      .first()
      .click();
    cy.get('#zipcode').type(Cep, {delay: 0});
    cy.get('.tab-panel-content .MuiButton-sizeSmall').click({force: true});
    cy.get('.freight-options').should('be.visible');
    cy.contains('button', 'Comprar').click();
    cy.wait(2000);
    cy.visit(baseUrl, { timeout: 4000 })
    cy.get('.slick-track .slick-active a.section.product-box-header')
      .last()
      .click();
    cy.get('.freight-options').should('be.visible');
    cy.contains('button', 'Comprar').click();
    cy.wait(4000)
    // cy.get('.section.custom-radio-ad')
    // .parent()
    // .should('have.name', 'address')
    // .click();
    cy.get(`.MuiTableBody-root .MuiTableRow-root:nth-child(${randomOptionChild}) input`).click();
    cy.get('.cart-finalizar-link button.MuiButton-containedPrimary').click()
    cy.get(`.MuiTableBody-root .MuiTableRow-root:nth-child(${randomOptionChild}) input`).click();
    // cy.get('#installments_number').select('x4');

  })

});