

context('Memotest', () => {
    before(() => {
        cy.visit('http://127.0.0.1:8080')
    })
});

describe('Empzar Juego', () => {
    const CANTIDAD_CARTAS = 18;
    it('Verifica  un tablero con cartas', () => {
        cy.get('#tablero').find('.carta').should('have.length', CANTIDAD_CARTAS)
    })
})

