import { faker } from '@faker-js/faker';

describe('suite de teste homepage e menus', () => {
  
  const baseUrl = 'https://commerce-hmg-fiatbarigui.mob1.one/';

  var randomInt = Math.floor(Math.random() *4);

  var Cep = '85810150';
  var Child = faker.datatype.number({
    'min': 2,
    'max': 5
  });

  beforeEach(() => {
  cy.visit(baseUrl);
  })

it('teste siteloja', () => {
cy.get('.MuiGrid-grid-lg-10 .slick-slide.slick-active')
  .invoke('attr', 'data-index')
  .should('equal', '0')

})

// cy.get('[data-test-id="test-example"]')


});