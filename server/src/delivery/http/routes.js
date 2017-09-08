// const express = require('express');
// const Router = express.Router;

const { Router } = require('express');

const router = Router();

router.get('/', function(request, response) {
  response.send('qualquer coisa ai ' + request.query.nome);
});

router.get('/users/:name', function(request, response) {
  response.send('outra coisa ai ' + request.params.name);
});

router.post('/users', function(request, response) {
  console.log(request.body);
  response.send('novo usuário criado ' + request.body.name);
});

module.exports = router;
