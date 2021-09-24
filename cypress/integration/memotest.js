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
            cy.get('.carta').then((cartas) => {
                let idImg = [];
                cartas.each((i, carta) => {
                    idImg.push(carta.id)
                })

                cy.visit('http://127.0.0.1:8080')

                cy.get('.carta').then((cartas) => {
                    let idNuevos = [];
                    cartas.each((i, carta) => {
                        idNuevos.push(carta.id)
                    })
                
                    cy.wrap(idImg).should('not.deep.equal', idNuevos)
                });
            
            });
        });
    });
    
    describe('Resuelve el juego', () => {
        const CANTIDAD_CARTAS = 18;
        let mapaDeCartas, listaCartasAdivinadas
        it('Elijo una carta errónea', () => {
          cy.get('.carta').then((cartas) => {
            mapaDeCartas = obtenerCartasIguales(cartas)
            listaCartasAdivinadas = Object.values(mapaDeCartas)
            listaCartasAdivinadas[0][0].click();
            listaCartasAdivinadas[1][0].click();
            cy.get('.carta').should('have.length', CANTIDAD_CARTAS)
          })
        })

        it('Gana el juego', () => {
            listaCartasAdivinadas.forEach((par) => {
              console.log(par);
              cy.get(par[0]).click()
              cy.get(par[1]).click()

            })
            cy.wrap(listaCartasAdivinadas).should('have.length', 9)
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


