//  3 Exercicio
var listElement = document.querySelector('#app ul');


var todos = JSON.parse(localStorage.getItem('list_todos')) || [
    "Diego", "Gabriel", "Lucas"
];

function renderTodos(){
   listElement.innerHTML = '';

    for (todo of todos){
            var todoElement = document.createElement('li');
            var todoText = document.createTextNode(todo);
           
            var pos = todos.indexOf(todo);

            var linkText = document.createTextNode('Excluir');  

            todoElement.appendChild(todoText);

            listElement.appendChild(todoElement);
        }
    }

    renderTodos();
