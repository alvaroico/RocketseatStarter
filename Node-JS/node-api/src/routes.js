const express = require('express');
const routes = express.Route();

//const Product = mongoose.model('Product');

const ProductControler = require('./controllers/ProductController');


// Primeira rota
routes.get('/products', ProductControler.index);

module.exports = routes;

/*
    Product.create({
        title: 'React Native',
        description: 'Build Native app with react',
        url: "https://google.com.br",
    })
    

    return */