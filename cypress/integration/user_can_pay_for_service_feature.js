describe('User can pay for a service', () => {
  before(() => {
    cy.visit('http://localhost:3000')
    cy.wait(2000)

  });

  it('when filling in a payment form', () => {
    cy.get('iframe[name^="__privateStripeFrame5"]')
      .then($iframe => {
        const $body = $iframe.contents().find("body");
        cy.wrap($body)
          .find('input[name="cardnumber"]')
          .type("4242424242424242", { delay: 10 });

      });

    cy.get('iframe[name^="__privateStripeFrame6"]')
      .then($iframe => {
        const $body = $iframe.contents().find("body");
        cy.wrap($body)
          .find('input[name="exp-date"]')
          .type("1220", { delay: 10 });


      });

    cy.get('iframe[name^="__privateStripeFrame7"]')
      .then($iframe => {
        const $body = $iframe.contents().find("body");
        cy.wrap($body)
          .find('input[name="cvc"]')
          .type("123", { delay: 10 });
      });

      cy.get('#pay').click()
  });
});