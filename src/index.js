const listaCartas = [{ id: "1", src: 'src/img/cards/boo.jpg' }, { id: "2", src: 'src/img/cards/gogetassj4.jpg' }, { id: "3", src: 'src/img/cards/gokusjj.jpg' }, { id: "4", src: 'src/img/cards/janemba.jpg' }, { id: "5", src: 'src/img/cards/majinvegeta.jpg' }, { id: "6", src: 'src/img/cards/trunksssj.jpg' }, { id: "7", src: 'src/img/cards/vegetagt.jpg' }, { id: "8", src: 'src/img/cards/vegito.jpg' }]

const cartas = document.querySelectorAll('.carta')
const intentos = []
const puntaje = 0
const srcCardBackwards = 'src/img/cards/2082113.png'
mezclarCartas()

//--------------------------------- -------------------------------------------------    -------------------------

function mezclarCartas() {
    const cartasDuplicadas = listaCartas.concat(listaCartas)
    const cartasRandom = cartasDuplicadas.sort(function () { return 0.5 - Math.random() })
    for (let i = 0; i <  cartasRandom.length; i++)
    {
        cartas[i].id = cartasRandom[i].id
    }
}

function voltearCarta(e)
{
    const $cartaFrente = e.target
    const data = listaCartas.find(carta => carta.id === $cartaFrente.id) //find , es como un foreach, funcion flecha =>, puede llevar 3 params de los cuales retornara, elemento, indice, array
    $cartaFrente.src = data.src
    setTimeout(function () {
        $cartaFrente.src = srcCardBackwards
    }, 2000)
}

//------------------- ------------------------------------------------------------------------------------------
for (let i = 0; i < cartas.length; i++)
{
    var carta = cartas[i]
    carta.addEventListener("click", voltearCarta)
}