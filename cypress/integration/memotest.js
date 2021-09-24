/// <reference types="cypress" />

context('Memotest', () => {
    
 
    before(() => {
        cy.visit('http://127.0.0.1:8080')
    })

    describe('Empzar Juego', () => {
        const CANTIDAD_CARTAS = 18;
        it('Verifica  un tablero con cartas', () => {
            cy.get('#tablero').find('.carta').should('have.length', CANTIDAD_CARTAS)
        })

        it('Chequea que las cartas sean aleatorias', () => {
            cy.get('.carta').then((listaCartas) => {
                let idImg = [];
                listaCartas.each((i, carta) => {
                    idImg.push(carta.id)
                })

                cy.visit('http://127.0.0.1:8080')

                cy.get('.carta').then((listaCartas) => {
                    let idNuevos = [];
                    listaCartas.each((i, carta) => {
                        idNuevos.push(carta.id)
                    })
                
                    cy.wrap(idImg).should('not.deep.equal', idNuevos)
                });
            
            });
        });
    });
    
    describe('Resuelve el juego', () => {
        const CANTIDAD_CARTAS = 18;
        let mapaDeCartas, arrCartasIguales
        it('Elijo una carta errónea', () => {
          cy.get('.carta').then((listaCartas) => {
            mapaDeCartas = obtenerCartasIguales(listaCartas)
            arrCartasIguales = Object.values(mapaDeCartas)
            arrCartasIguales[0][0].click();
            arrCartasIguales[1][0].click();
            cy.get('.carta').should('have.length', CANTIDAD_CARTAS)
          })
        })

        it('Gana el juego', () => {
            arrCartasIguales.forEach((par) => {
              console.log(par);
              cy.get(par[0]).click()
              cy.get(par[1]).click()
            })
        })
    })
});

function obtenerCartasIguales(cartas) {
    const cartasIguales = {}
  
    cartas.each((i, carta) => {
      if (!cartasIguales[carta.id]) {
        cartasIguales[carta.id] = [];
      }
      cartasIguales[carta.id].push(carta);
    })
    console.log(cartasIguales);
    return cartasIguales;
  }


