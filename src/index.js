const listaCartas = [{ name: "boo", id: "1", src: 'src/img/cards/boo.jpg' }, { name: "gogetassj4",id: "2", src: 'src/img/cards/gogetassj4.jpg' }, { name: "gokussj",id: "3", src: 'src/img/cards/gokusjj.jpg' }, {name: "janemba", id: "4", src: 'src/img/cards/janemba.jpg' }, {name: "majinvegeta", id: "5", src: 'src/img/cards/majinvegeta.jpg' }, {name: "trunksssj", id: "6", src: 'src/img/cards/trunksssj.jpg' }, {name: "vegetagt", id: "7", src: 'src/img/cards/vegetagt.jpg' }, { name: "vegito",id: "8", src: 'src/img/cards/vegito.jpg' }]

const cartas = document.querySelectorAll('.carta')
let intentos = 0
let secuenciaTurno = []
let puntaje = 0
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
    if (secuenciaTurno.length <= 2)
    {
        const $cartaFrente = e.target
        const data = listaCartas.find(carta => carta.id === $cartaFrente.id) //find , es como un foreach, funcion flecha =>, puede llevar 3 params de los cuales retornara, elemento, indice, array
        $cartaFrente.src = data.src
        console.log(data)
        secuenciaTurno.push($cartaFrente.id)
        comprarCartas($cartaFrente)
    }

}

function comprarCartas($cartaFrente)
{
    let primerItem = Number(secuenciaTurno[0])

    let segundoItem = Number(secuenciaTurno[1])

    if (secuenciaTurno.length === 2)
    {
        console.log(secuenciaTurno)
        if (primerItem === segundoItem)
        {
            puntaje++;
            intentos++;
            console.log("Ambas se quedan asi")

        }
        else {
            setTimeout(function () {
                $cartaFrente.src = srcCardBackwards;                
            }, 1000)
            console.log("Deberian darse vuelta las dos")
        }
        vaciarCartasVolteadas()
    }
}

function vaciarCartasVolteadas()
{
    secuenciaTurno = []
}


//------------------- ------------------------------------------------------------------------------------------
for (let i = 0; i < cartas.length; i++)
{
    var carta = cartas[i]
    carta.addEventListener("click", voltearCarta)
}