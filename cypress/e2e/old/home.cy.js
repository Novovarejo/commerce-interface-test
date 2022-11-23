import { first } from 'lodash';

describe('suite de teste homepage e menus', () => {
  
  const baseUrl = 'https://commerce-hmg-fiatbarigui.mob1.one/';
  const categoriesWrapper = '.section.nav'


  beforeEach(() => {
  cy.visit(baseUrl);
  })

  it('1.a.b.c - teste banners e setas', () => {
    cy.get('.slick-active')
    .invoke('attr', 'data-index')
    .should('eq', '0');
    cy.get('.slider-desktop').click();
      cy.get('h1')
      .should('be.visible');
      cy.go('back');
  
    cy.get('.slider .slider-desktop button.slick-next').click();
    cy.get('.slick-active')
    .invoke('attr', 'data-index')
    .should('eq', '1');
    cy.get('.slider-desktop').click();;
      cy.get('h1')
      .should('be.visible');
      cy.go('back');
  
    cy.get('.slider .slider-desktop button.slick-prev').click();
    cy.get('.slick-active')
    .invoke('attr', 'data-index')
    .should('eq', '2');
    cy.get('.slider-desktop').click();
      cy.get('h1')
      .should('be.visible');
  })

  it ('1.d.e - teste categorias em destaque', () => {
    for(let clickedIndex = 1; clickedIndex <= 5; clickedIndex++) {
      it(`check if have products after click in category ${clickedIndex}`, () => {
        cy.get(`${categoriesWrapper} button:nth-child(${clickedIndex})`).click();
  
        for(let i = 1; i <= 5; i++) {
          let panelIndex = i - 1;
  
          // Checa painel e se tem produtos nele
          if (clickedIndex == i) {
            cy.get(`#vertical-tabpanel-${panelIndex}`).should('be.visible');
            cy.get(`#vertical-tabpanel-${panelIndex} .slick-track > .slick-slide`)
              .should('have.length.greaterThan', 0);
          } else {
            // todos os outros paineis devem estar ocultos
            cy.get(`#vertical-tabpanel-${panelIndex}`).should('not.be.visible');
          }
        }
      })
    }
  })

  it('1.f - menu todas as categorias', () => {
    
    for(let clickedIndex = 1; clickedIndex <= 8; clickedIndex++) {
        cy.get('.nav-link').first().click();
        cy.get(`.MuiList-padding .dropdown-category-link:nth-child(${clickedIndex})`).click();
        
        for(let clickedProd = 1; clickedProd <= 5; clickedProd++){
          //categoria sem produtos - buscar correção.
          // cy.get(`.MuiGrid-grid-md-10 .MuiGrid-spacing-xs-2 :nth-child(${clickedProd})`).first().click({force: true});
          cy.get('h1').should('be.visible');
        }
      }        
  })

  it('1.g - categorias do menu superior.', () => {
    
    for(let clickedIndex = 2; clickedIndex <= 6; clickedIndex++) {
        cy.get(`a.nav-link:nth-child(${clickedIndex})`).click();
        cy.get('.section .product-box-header').should('be.visible');
       }
  })
});

