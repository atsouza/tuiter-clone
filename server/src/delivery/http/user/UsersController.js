const { Router } = require('express');
const UserRepository = require('../../../infra/user/UserRepository');
// GET /users (retorna todos usuarios) > index()
// GET /users/:id (um só) > show()
// POST /users (cria um usuário novo) > create()
// PUT /users/:id (atualiza um usuario) > update()
// DELETE /users/:id (deleta o usuario) > delete()


/*

  implementar update
  -atualizar usuario se existir
  -se não existir retorna 404
  status 202 (sucesso)

*/

class UsersController {

  constructor(){
    this.userRepository = new UserRepository();
  }

  static getRoutes() {
    const router = Router();
    const controller = new UsersController();
    router.get('/', controller.index.bind(controller));
    router.get('/:id', controller.show.bind(controller));
    router.post('/', controller.create.bind(controller));
    router.put('/:id', controller.update.bind(controller));
    return router;
  }

  index(request, response) {
    this.userRepository.getAll().then(function(users) {
      response.send(users);
    });
  }

  show(request,response) {
    const id = parseInt(request.params.id);
    this.userRepository.getById(id)
      .then(function(user){
        response.send(user);
      })
      .catch(function(error){
        response.status(404).send({
          errorMessage: error.message,
          jureg: 'urro'
        });
      });
  }

  create(request, response) {
    const name = request.body.name;
    this.userRepository.add({name:name}).then(function(user) {
      response.status(201).send(user);
    });
  }

  update(request, response) {
    const name = request.body.name;
    const id = request.body.id;
    this.userRepository.update({name:name, id:id}).then(function (user){
      response.status(202).send(user);
    });
  }

}

module.exports = UsersController;
