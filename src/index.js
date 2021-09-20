const listaCartas = [{ name: "boo", id: "1", src: 'src/img/cards/boo.jpg' }, { name: "gogetassj4",id: "2", src: 'src/img/cards/gogetassj4.jpg' }, { name: "gokussj",id: "3", src: 'src/img/cards/gokusjj.jpg' }, {name: "janemba", id: "4", src: 'src/img/cards/janemba.jpg' }, {name: "majinvegeta", id: "5", src: 'src/img/cards/majinvegeta.jpg' }, {name: "trunksssj", id: "6", src: 'src/img/cards/trunksssj.jpg' }, {name: "vegetagt", id: "7", src: 'src/img/cards/vegetagt.jpg' }, { name: "vegito",id: "8", src: 'src/img/cards/vegito.jpg' }]

const cartas = document.querySelectorAll('.carta')
let intentos = 0;
let secuenciaTurno = []
const srcCartaTrasera = 'src/img/cards/2082113.png'
mezclarCartas()
perder()

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
    if (secuenciaTurno.length < 2)
    {

        const data = listaCartas.find(carta => carta.id === $cartaFrente.id) //find , es como un foreach, funcion flecha =>, puede llevar 3 params de los cuales retornara, elemento, indice, array
        $cartaFrente.src = data.src
        console.log($cartaFrente)
        secuenciaTurno.push($cartaFrente)
        comprarCartas($cartaFrente)
    }
    else {
        bloquearInput($cartaFrente)
        console.log("Mas de dos")
    }
    console.log(secuenciaTurno.length)
}

function comprarCartas()
{
    let primerItem = secuenciaTurno[0]

    let segundoItem = secuenciaTurno[1]

    if (secuenciaTurno.length === 2)
    {
        console.log(secuenciaTurno)
        if (primerItem.id === segundoItem.id)
        {
            intentos++;
            console.log("Ambas se quedan asi")

        }
        else {
            intentos++;
            setTimeout(function () {
                primerItem.src = srcCartaTrasera
                segundoItem.src = srcCartaTrasera
            }, 1000)
            console.log("Deberian darse vuelta las dos")
        }
        setTimeout(function () {
            vaciarCartasVolteadas() 
        }, 1000)

        intentosEnPantalla()
    }
}

function vaciarCartasVolteadas()
{
    secuenciaTurno = []
}

function intentosEnPantalla()
{
    let elementoIntentos = document.querySelector('#intentos')
    if (intentos !== 0 )
    {
        elementoIntentos.textContent = "Intentos: " + intentos
    }
}

function bloquearInput($cartaFrente)
{

    $cartaFrente.removeEventListener("click", voltearCarta) 


}

function perder()
{
    if (intentos === 10)
    {
        console.log("Perdiste")
        
    }
}

//------------------- ------------------------------------------------------------------------------------------
for (let i = 0; i < cartas.length; i++)
{
    var carta = cartas[i]
    carta.addEventListener("click", voltearCarta)
}