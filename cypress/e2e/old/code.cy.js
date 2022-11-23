import { faker } from '@faker-js/faker';
import { first } from 'lodash';

describe('Suite de Teste', () => { 

  const baseUrl = 'https://commerce-hmg-fiatbarigui.mob1.one/';

  var postCode = faker.address.zipCode();
  var findProd = 'cox'

  beforeEach(() => {
    cy.visit(baseUrl);
  })
  
  it('', () => {
    cy.get('.MuiGrid-container .slick-slide.slick-active').first().click()
  })
});