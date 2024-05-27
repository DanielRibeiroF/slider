let btnNext = document.querySelector('.next')
let btnBack = document.querySelector('.back')

let container = document.querySelector('.container')
let list = document.querySelector('.container .list')
let thumb = document.querySelector('.container .thumb')

btnNext.onclick = () => moveItemsOnClick('next')
btnBack.onclick = () => moveItemsOnClick('back')

/* APPENDCHILD coloca os itens no começo da lista, PREPEND coloca no final da lista*/

function moveItemsOnClick(type) {
    listItems = document.querySelectorAll('.list .list-item')
    thumbItems = document.querySelectorAll('.thumb .thumb-item')

    if(type === 'next') {
        list.appendChild(listItems[0])
        thumb.appendChild(thumbItems[0])
        container.classList.add('next')
    } else {
        list.prepend(listItems[listItems.length - 1])
        thumb.prepend(thumbItems[listItems.length - 1])
        container.classList.add('back')
    }

    setTimeout(() => {
        container.classList.remove('next')
        container.classList.remove('back')
    }, 3000);

}

function exibirFrase() {
    var frase = "Esse site é apenas um site de aprendizado e teste de programação!";
    document.getElementById("fraseExibida").innerHTML = frase;

    setTimeout(function() {
        document.getElementById("fraseExibida").innerHTML = "";
    }, 3000); // 3000 milissegundos = 3 segundos
}