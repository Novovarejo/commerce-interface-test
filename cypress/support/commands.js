Cypress.Commands.add('login', (email, pw) => {
    cy.get('.header-signin-text span').last().parents().first().click()
    cy.get('.modalBody .solidBtn').click();
    cy.get('.modalBody input[name="email"]').type(email, {delay: 0});
    cy.get('.modalBody input[name="password"]').type(pw, {delay: 0});
    cy.contains('button', 'Entrar').click();
})
Cypress.Commands.add("clickRecaptcha", () => {
    cy.window().then(win => {
      win.document
        .querySelector("iframe[src*='https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LeYmMYeAAAAAJ0vwOy8R9QfGOgDylEIS75csgSV&co=aHR0cHM6Ly9jb21tZXJjZS1obWctZmlhdGJhcmlndWkubW9iMS5vbmU6NDQz&hl=pt-BR&type=image&v=Km9gKuG06He-isPsP6saG8cn&theme=light&size=normal&badge=bottomright&cb=1vcoa8losjqs']")
        .contentDocument.getElementById("6LeYmMYeAAAAAJ0vwOy8R9QfGOgDylEIS75csgSV")
        .click();
    });
  });