// 3 Exercicio

var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var usuariogithub = function(){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/'+inputElement.value+'/repos');
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro 404');
                }
            }
        }
    });
}
function buscarusuario(){
    usuariogithub()
    .then(function(responsee){
        for (var i = 0; i < responsee.length; i++) {
                    
            var ListaElement = document.createElement('li');
            var ListaText = document.createTextNode(responsee[i].name);
        
                    ListaElement.appendChild(ListaText);
                    listElement.appendChild(ListaElement);             
            }

        })    
    .catch(function(error){
        console.log(error);
    })
}

buttonElement.onclick = buscarusuario;