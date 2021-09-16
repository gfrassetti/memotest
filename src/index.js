const listaCartas = ['src/img/cards/boo.jpg', 'src/img/cards/gogetassj4.jpg', 'src/img/cards/gokusjj.jpg','src/img/cards/janemba.jpg', 'src/img/cards/majinvegeta.jpg','src/img/cards/trunksssj.jpg','src/img/cards/vegetagt.jpg', 'src/img/cards/vegito.jpg']
const cartas = document.querySelectorAll('.carta')
repartirCartas()

function repartirCartas()
{
    for (let i = 0; i < cartas.length; i++)
    {
        let srcCartaFrente = asiganarCarta()
        cartas[i].src = srcCartaFrente       
    }
}

function asiganarCarta()
{

    var cartadeFrente = listaCartas[Math.floor(Math.random() * listaCartas.length)];
    return cartadeFrente
}