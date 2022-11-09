describe('suite de teste homepage', () => {
  
  const baseUrl = 'https://commerce-hmg-fiatbarigui.mob1.one/';

  beforeEach(() => {
  cy.visit(baseUrl);
  })

  it('1.a', () => {
    cy.get('.slider-desktop > .slick-list > .slick-track > .slick-active > :nth-child(1) > .section > .slide-item').should('be.visible');
    cy.get('.slider-desktop > .slick-list > .slick-track > .slick-active > :nth-child(1) > .section > .slide-item').click();
    cy.get('h1').should('be.visible');
  })

  it ('1.c', () => {
    cy.get('.slider-desktop > .slick-prev > .MuiButton-label > .MuiSvgIcon-root').should('be.visible');
    cy.get('.slider-desktop > .slick-prev > .MuiButton-label > .MuiSvgIcon-root').click();
    cy.get('.slider-desktop > .slick-next > .MuiButton-label > .MuiSvgIcon-root').click({force: true});
    cy.wait(3000)
    cy.get('.slider-desktop > .slick-prev > .MuiButton-label > .MuiSvgIcon-root').click({force: true});
    cy.wait(3000)
    cy.get('.slider-desktop > .slick-next > .MuiButton-label > .MuiSvgIcon-root').click({force: true});
    cy.wait(3000)
    cy.get('.slider-desktop > .slick-list > .slick-track > .slick-active > :nth-child(1) > .section > .slide-item').click();
    cy.wait(3000)
    cy.get('h1').should('be.visible');    
  }) 

  it ('1.d', () => {
    cy.get('.slick-next').should('be.visible');
    cy.wait(1000);
    cy.get('.slick-next > .MuiSvgIcon-root').click({force: true});
    cy.wait(2000);
    cy.get('.slick-prev > .MuiSvgIcon-root').click({force: true});
    cy.wait(1000);
    cy.get('.slick-next > .MuiSvgIcon-root').click({force: true});
    cy.wait(2000);
    cy.get('.slick-prev > .MuiSvgIcon-root').click({force: true});
    
    
    
  })

});

