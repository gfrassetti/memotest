
const listaCartas = [{ name: "boo", id: "1", src: 'src/img/cards/boo.jpg' }, { name: "gogetassj4", id: "2", src: 'src/img/cards/gogetassj4.jpg' }, { name: "gokussj", id: "3", src: 'src/img/cards/gokusjj.jpg' }, { name: "janemba", id: "4", src: 'src/img/cards/janemba.jpg' }, { name: "majinvegeta", id: "5", src: 'src/img/cards/majinvegeta.jpg' }, { name: "trunksssj", id: "6", src: 'src/img/cards/trunksssj.jpg' }, { name: "vegetagt", id: "7", src: 'src/img/cards/vegetagt.jpg' }, { name: "vegito", id: "8", src: 'src/img/cards/vegito.jpg' }, { name: "vegito", id: "9", src: 'src/img/cards/bulma.jpg' }]

const cartas = document.querySelectorAll('.carta')
let intentos = 0;
let cartasComparadas = []
let cartasAdivnadas = []
const srcCartaTrasera = 'src/img/cards/2082113.png'


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

    let $cartaFrente = e.target
    const data = listaCartas.find(carta => carta.id === $cartaFrente.id)
    
    if (cartasComparadas.length < 2)
    {
        $cartaFrente.src = data.src
        cartasComparadas.push($cartaFrente)
        console.log($cartaFrente)
        comprarCartas()
    }
    else {
        $cartaFrente = ""
    }

    if ($cartaFrente.className === "carta")
    {
        $cartaFrente.classList.add('card-back')    
    }
    else {
        $cartaFrente.className = "carta"
    }

    if (cartasComparadas.length === 1) 
    {
        $cartaFrente.removeEventListener("click", voltearCarta)

    }
}

function comprarCartas()
{
    let primerItem = cartasComparadas[0]

    let segundoItem = cartasComparadas[1]

    if (cartasComparadas.length === 2)
    {
        if (primerItem.id === segundoItem.id)
        {
            intentos++;
            console.log("Ambas se quedan asi")
            cartasAdivnadas.push(primerItem, segundoItem)
            for (let i = 0; i < cartasAdivnadas.length; i++)
            {
                cartasAdivnadas[i].removeEventListener('click', voltearCarta)
            }
            ganar()
        }
        else if (primerItem.id !== segundoItem.id)
        {            
            intentos++;
            setTimeout(function () {
                primerItem.src = srcCartaTrasera
                segundoItem.src = srcCartaTrasera
                perder()
            }, 1000)
        }
        setTimeout(function () {
            vaciarCartasVolteadas()
        }, 1000)

        intentosEnPantalla()
    }
}

function vaciarCartasVolteadas()
{
    cartasComparadas = []

}

function intentosEnPantalla()
{
    let elementoIntentos = document.querySelector('#intentos')
    if (intentos !== 0 )
    {
        elementoIntentos.textContent = intentos+"/15"
    }
}

function ocultarIntentos()
{
    const elementoIntentos = document.querySelector('#intentos')
    elementoIntentos.textContent = ""

}

function perder()
{
    if (intentos === 15)
    {
        if (cartasAdivnadas.length < 18)
        {
            console.log("Perdiste")

            mostrarVistaPerder()
            
        }    
    }
}

function ganar()
{
    if (cartasAdivnadas.length === 18)
    {
        if (intentos <= 15)
        {
            console.log("Ganaste")
            mostrarVistaGanar()
        }    
    }
}

function mostrarVistaGanar()
{
    ocultarIntentos()
    const container = document.querySelector('.cartas-container')
    const tablero = document.querySelector('#tablero')
    tablero.className = 'oculto'
    const resetBtn = document.createElement('button')
    const mensaje = document.createElement('h1')
    mensaje.textContent = "Ganaste! :D , presiona reset para volver a comenzar"
    mensaje.id = "mensaje-ganaste"
    const a = document.querySelector('a')
    a.className = 'oculto'
    resetBtn.type = 'reset'
    resetBtn.innerText = "Reset "
    resetBtn.id = 'resetBtn'
    resetBtn.className = "btn btn-outline-primary btn-lg"
    resetBtn.onclick = refresPage
    container.appendChild(resetBtn)
    container.appendChild(mensaje)
}

function mostrarVistaPerder()
{
    ocultarIntentos()
    const container = document.querySelector('.cartas-container')
    const tablero = document.querySelector('#tablero')
    const githubIcon = document.querySelector('#github')
    githubIcon.className = 'oculto'
    tablero.className = 'oculto'
    const resetBtn = document.createElement('button')
    const mensaje = document.createElement('h1')
    const a = document.querySelector('a')
    a.className = 'oculto'
    mensaje.textContent = "Perdiste! :( , presiona reset para volver a comenzar"
    mensaje.id = "mensaje-perdiste"
    resetBtn.type = 'reset'
    resetBtn.innerText = "Reset "
    resetBtn.id = 'resetBtn'
    resetBtn.className = "btn btn-danger btn-lg"
    resetBtn.onclick = refresPage
    container.appendChild(resetBtn)
    container.appendChild(mensaje)
    const imgIntentos = document.querySelector('#intentos-img')
    imgIntentos.className = "oculto"
}

function refresPage()
{
    window.location.reload()
}



//------------------- ------------------------------------------------------------------------------------------
cartas.forEach(function (carta) {
    carta.addEventListener("click", voltearCarta)
})

mezclarCartas()
