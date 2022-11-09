describe('Suite de Testes cadastro', () => {
  
  const baseUrl = 'https://commerce-hmg-fiatbarigui.mob1.one/';

  let newfirstName = 'teste'
  let newlastName = 'nvpc'
  let newPhone = '419999876543'
  let newCompany = 'company'
  let newTax = '39181856997'
  let newDocPJ = '12256163000119'
  let newDocPF = '69709634038'
  let newEmail = 'teste12@novovarejo.com'
  let newEmail2 = 'teste13@novovarejo.com'
  let erroremail = 'teste@'
  let newPass = '123456'
  let newPasserror = '1234567'

  beforeEach(() => {
  cy.visit(baseUrl);
  })

  it ('1.d - CPF', () => {
    cy.contains('a', 'Cadastre-se').click();
    cy.contains('span', 'Pessoa física').click();
    cy.get('.RegisterButton > .MuiButtonBase-root').click({force: true});
    cy.get('.policy-term-check-text-error').should('be.visible');
    cy.get('.policy-term-check-text-error').should('have.text', 'Você deve aceitar os termos de uso para prosseguir.');
    cy.get('.policy-term-check-text > span').click({force: true});
    cy.get('.RegisterButton > .MuiButtonBase-root').click({force: true});
    cy.get('#firstname-helper-text').should('have.text', 'Campo obrigátorio');
    cy.get('#lastname-helper-text').should('have.text', 'Campo obrigátorio');
    cy.get('#phone-helper-text').should('have.text', 'O campo telefone é obrigatório');
    cy.get('#document-helper-text').should('have.text', 'O campo CPF é obrigatório');
    cy.get('#email-helper-text').should('have.text', 'O campo e-mail é obrigatório');
    cy.get('#password-helper-text').should('have.text', 'Campo obrigátorio');
    cy.get('#password_confirmation-helper-text').should('have.text', 'Campo obrigatório');

  }) 
  it ('1.d - CNPJ', () => {
    cy.contains('a', 'Cadastre-se').click();
    cy.contains('span', 'Pessoa jurídica').click();
    cy.get('.RegisterButton > .MuiButtonBase-root').click({force: true});
    cy.get('.policy-term-check-text-error').should('be.visible');
    cy.get('.policy-term-check-text-error').should('have.text', 'Você deve aceitar os termos de uso para prosseguir.');
  
  })


});

