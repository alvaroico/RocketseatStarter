var listElement = document.querySelector('#app ul');
var iputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [
    'Fazer caé',
    'Estudar Javascript',
    'Acessar o google'
];

function renderTodos(){
    for (todo of todos){
            var todoElement = document.createElement('li');
            var todoText = document.createTextNode(todo);

            todoElement.appendChild(todoText);
            listElement.appendChild(todoElement);
        }
    }

    renderTodos();