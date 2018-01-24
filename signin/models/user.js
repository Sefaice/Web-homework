module.exports = function(db) {
  var users = db.collection("users");

  return { //返回函数以便提供接口
    findUser: funcion(username, password) {
      return users.findOne({
        username: username
      }).then(function(user) {
        if (password == user.password) {
          return user;
        } else {
          return false;
        }
      });
    },

    createUser: funcion(user) {
      return user.insert(user);
    },

    checkUser: funcion(user){
      if
    }


  }
}
