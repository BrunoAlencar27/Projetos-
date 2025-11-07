const express = require('express');
const route = express.Router();
const userController = require('./src/controllers/userController.js');
const loginController = require('./src/controllers/loginController.js')
const dashController = require('./src/controllers/dashController.js')

//Rota da Home com as opções
route.get('/',userController.home);

//Rota para o formulário para cadastro de usuário
route.get('/use',userController.cadastro);

//Rota para criar o novo usuário no banco de dados
route.post('/use',userController.create);

//Rota para listar
route.get('/users',userController.list);

route.get('/user/update/:id',userController.formUpdate);

route.post('/user/update/:id',userController.update);

route.get('/login',loginController.register);

route.post('/login',loginController.register2);

route.get('/dashboard',dashController.dash);

module.exports = route;