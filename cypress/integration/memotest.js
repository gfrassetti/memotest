
context('Memotest', () => {
    before(() => {
        cy.visit("http://127.0.0.1:8080")
    })
});
describe('Comienza el juego', () => {
    const NUMERO_CARTAS = 18;
    it('Verifica que haya un tablero con cartas', () => {
        cy.get('#tablero').find('.carta').should('have.length', NUMERO_CARTAS)
    })
})

