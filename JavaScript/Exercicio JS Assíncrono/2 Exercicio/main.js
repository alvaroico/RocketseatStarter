// 2 Exercicio
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

function usuariogithub(){
    
    var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/'+inputElement.value+'/repos');
xhr.send(null);

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        
        for (var i = 0; i < JSON.parse(xhr.responseText).length; i++) {
            
        var ListaElement = document.createElement('li');
        var ListaText = document.createTextNode(JSON.parse(xhr.responseText)[i].name);

            ListaElement.appendChild(ListaText);
            listElement.appendChild(ListaElement);
         // console.log(JSON.parse(xhr.responseText));
       // console.log(JSON.parse(xhr.responseText)[0].name);
       
        }
    }
}
}
buttonElement.onclick = usuariogithub;
