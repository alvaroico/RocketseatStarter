const arr = [1, 3, 4, 5, 8, 9];

// percorer vetor e retornar informação
const newArr = arr.map(function(item, index){
    //return item * 2;
    return item * index;
});

console.log(newArr)

//consumir o vetor e retornar uma unica variavel
const sum = arr.reduce(function(total, next){
    return total + next
});

console.log(sum);

//retorna um filtro do arrei (arr)
const filter = arr.filter(function(item){
    return item % 2 === 0;
});

console.log(filter);

// buscar item no arrei (arr)
const find = arr.find(function(item){
    return item == 4;
});

console.log(find);