//Desestruturação

const usaurio = {
    nome: 'Álvaro',
    idade: 27,
    endereco: {
        cidade: 'Ribeião Preto',
        estado: 'SP'
    },
};

function mostraNome({ nome, idade }){
    console.log(nome, idade)
}

mostraNome(usaurio);