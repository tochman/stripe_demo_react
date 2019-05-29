describe('User can pay for a service', () => {
  before(() => {
    cy.visit('http://localhost:3000')
    cy.wait(2000)

  });

  it('when filling in a payment form', () => {
    cy.get('iframe[name^="__privateStripeFrame5"]')
      .then($iframe => {
        const $body = $iframe.contents().find("#root");
        cy.wrap($body)
          .find('input[name="cardnumber"]')
          .type("4242424242424242", { delay: 10 });
      });
  });

});