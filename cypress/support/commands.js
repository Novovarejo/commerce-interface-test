Cypress.Commands.add('login', (email, pw) => {
    cy.get('.header-signin-text span').last().parents().first().click()
    cy.get('.modalBody .solidBtn').click();
    cy.get('.modalBody input[name="email"]').type(email, {delay: 0});
    cy.get('.modalBody input[name="password"]').type(pw, {delay: 0});
    cy.contains('button', 'Entrar').click();
})


