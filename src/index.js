const listaCartas = ['src/img/cards/boo.jpg', 'src/img/cards/gogetassj4.jpg', 'src/img/cards/gokusjj.jpg','src/img/cards/janemba.jpg', 'src/img/cards/majinvegeta.jpg','src/img/cards/trunksssj.jpg','src/img/cards/vegetagt.jpg', 'src/img/cards/vegito.jpg']
const cartas = document.querySelectorAll('.carta')
repartirCartas()

function repartirCartas()
{
    for (let i = 0; i < cartas.length; i++)
    {
        let srcCartaFrente = asiganarCartaFrente()
        cartas[i].src = srcCartaFrente
    }

}

function asiganarCartaFrente()
{
    var cartadeFrente = listaCartas[Math.floor(Math.random() * listaCartas.length)];
    return cartadeFrente
}

/*
function desbloquearInput()
{
    cartas.forEach(function($carta) {
        $carta.onclick = inputUsuario
    })
}

function inputUsuario(e)
{
    const $carta = e.target
    console.log($carta)
    mostrarCarta($carta)

}

function mostrarCarta($carta)
{
    let srcCartaFrente = asiganarCartaFrente()
    $carta.src = srcCartaFrente
}

function asiganarCartaFrente()
{

    var cartadeFrente = listaCartas[Math.floor(Math.random() * listaCartas.length)];
    return cartadeFrente
}
*/