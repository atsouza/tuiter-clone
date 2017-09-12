const users = [
  {
    id: 1,
    name: 'adenir'
  },
  {id: 2, name: 'taliçu'}
];

class UserRepository {
  getAll() {
    return Promise.resolve(users);
  }

  getById(id){
    const foundUser = users.find(function(user){
      return user.id == id;
    });

    if(foundUser){
      return Promise.resolve(foundUser);
    }else{
      return Promise.reject(new Error(`usuário ${id} não encontrado`));
    }
  }

  add(userAttributes){
    const newUser = {name:userAttributes.name, id:users.length+1} ;
    users.push(newUser);
    return Promise.resolve(newUser);
  }

}

module.exports = UserRepository;
