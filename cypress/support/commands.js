Cypress.Commands.add('buy', (asset, qty) => {
  cy.contains('ETH').click();

  switch (asset.toUpperCase()) {
    case 'ETH':
      cy.contains('Ethereum').click();
      break;
    case 'BTC':
      cy.contains('Bitcoin').click();
      break;
    case 'SOL':
      cy.contains('Solana').click();
      break;
  }
  cy.get('input').type(qty);
});

Cypress.Commands.add('submitBuy', () => {
  cy.get('button').contains('Buy').click();
});

Cypress.Commands.add('verifySubmitDisabled', () => {
  cy.get('button').contains('Buy').as('submitBtn');
  cy.get('@submitBtn').should('be.disabled');
});
