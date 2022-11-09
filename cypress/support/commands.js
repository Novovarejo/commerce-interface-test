
Cypress.Commands.add('loginModal', (email, senha) => {
    cy.get('.modalBody input[name="email"]').type(email);
    cy.get('.modalBody input[name="password"]').type(senha);
   });