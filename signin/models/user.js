module.exports = function(db) {
  var users = db.collection("users");

  return { //返回函数以便提供接口
     findUser: function(username, password) {
      return users.findOne({username: username}).then(function(user) {
        if (password == user.password) {
          return user;
        } else {
          return false;
        }
      });
    },

    createUser: function(user) {
      return user.insert(user);
    },

    checkUser: function(user) {
      console.log(users.findOne({username: user.username}));
      if (users.findOne({username: user.username})) { //not null
        return false;
      } else {
        return true;
      }
    }
  }
}
