//  1 Exercicio
var buttonElement = document.querySelector('#app button');
var listElement = document.querySelector('#app');

function novoElemento(){
    
    var boxElement = document.createElement('div');

    boxElement.style.width = '100px';
    boxElement.style.height = '100';
    boxElement.style.backgroundColor = '#f00';

    listElement.appendChild(boxElement); 
}


buttonElement.onclick = novoElemento;