const arr = [1, 3, 4, 5, 6];

//Arrow Functions == pode rira function quando e so um parametro pode tira a () e ...
//...se for somente 1 item pode tira a chaves {} ficando em 1 linha
const newArr = arr.map(item => item * 2);

console.log(newArr)

const teste = () => ({ nome: 'Alvaro'});

console.log(teste());

