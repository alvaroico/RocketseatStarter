// REST

function soma(...params){
    return params.reduce((total, next) => total + next);
}

console.log(soma(1, 3, 4));


// SPREAD

const usaurio1 = {
    nome: 'Alvaro',
    idade: 27,
    empresa: 'Alvinho corporação',
};

const usaurio2 = { ...usaurio1, nome: 'Alvaro Ribeiro Periera'};

console.log(usaurio2);