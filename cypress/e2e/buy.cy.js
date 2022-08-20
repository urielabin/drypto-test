import buyData from '../fixtures/buy.json';

context('Drypto', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('Buy functionality', () => {
    it('should validate the buy button to be disabled with 0 - ETH', () => {
      cy.buy('ETH', buyData.default);
      cy.verifySubmitDisabled();
    });

    it('should validate the buy button to be disabled with negative values - ETH', () => {
      cy.buy('ETH', buyData.negative);
      cy.verifySubmitDisabled();
    });

    it('should validate the buy button to be disabled with non-numeric values - ETH', () => {
      cy.buy('ETH', buyData.non_numeric);
      cy.verifySubmitDisabled();
    });

    it('should validate the buy button to be disabled with 0 - BTC', () => {
      cy.buy('BTC', buyData.default);
      cy.verifySubmitDisabled();
    });

    it('should validate the buy button to be disabled with negative values - BTC', () => {
      cy.buy('BTC', buyData.negative);
      cy.verifySubmitDisabled();
    });

    it('should validate the buy button to be disabled with character values - BTC', () => {
      cy.buy('BTC', buyData.non_numeric);
      cy.verifySubmitDisabled();
    });

    it('should validate the buy button to be disabled with 0 - SOL', () => {
      cy.buy('SOL', buyData.default);
      cy.verifySubmitDisabled();
    });

    it('should validate the buy button to be disabled with negative values - SOL', () => {
      cy.buy('SOL', buyData.negative);
      cy.verifySubmitDisabled();
    });

    it('should validate the buy button to be disabled with character values - SOL', () => {
      cy.buy('SOL', buyData.non_numeric);
      cy.verifySubmitDisabled();
    });

    it('should complete a purchase of ETH', () => {
      cy.buy('ETH', buyData.valid);
      cy.submitBuy();

      cy.get('div')
        .contains(
          'Purchased $' +
            buyData.valid +
            ' ' +
            buyData.assetNameETH,
        )
        .should('be.visible');
    });

    it('should complete a purchase of BTC', () => {
      cy.buy('BTC', buyData.valid);
      cy.submitBuy();

      cy.get('div')
        .contains(
          'Purchased $' +
            buyData.valid +
            ' ' +
            buyData.assetNameBTC +
            '!',
        )
        .should('be.visible');
    });

    it('should complete a purchase of SOL', () => {
      cy.buy('SOL', buyData.valid);
      cy.submitBuy();

      cy.get('div')
        .contains(
          'Purchased $' +
            buyData.valid +
            ' ' +
            buyData.assetNameSOL,
        )
        .should('be.visible');
    });
  });
});
