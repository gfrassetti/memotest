/// <reference types="Cypress" />


const URL = 'http://127.0.0.1:8080';

context('Memotest', () => {
    before(() => {
        cy.visit(URL)
    })
});

it('test', () => {

});

describe('Comienza el juego', () => {
    const NUMERO_CARTAS = 16;
    it('Verifica que haya un tablero con cartas', () => {
      cy.get('#memotest').find('.card-size').should('have.length', NUMERO_CARTAS)
    })

