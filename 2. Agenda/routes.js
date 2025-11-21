const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController.js');
const authController = require('./src/controllers/authController.js');

//Rota da Home com as opções
route.get('/', homeController.index);

//Rota para a página de Login/Register
route.get('/login/index', authController.index);

//Rota para envio do form de register
route.post('/register', authController.register);

module.exports = route;
