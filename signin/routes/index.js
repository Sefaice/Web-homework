var express = require('express');
var router = express.Router();

module.exports = function(db) {

  var mUsername = "",
    mId = "",
    mTel = "",
    mEmail = "";

  var userManager = require('../models/user')(db);

  // GET home page.
  router.get('/regist', function(req, res, next) {
    res.render("signup", {
      title: "注册"
    });
  });

  //form
  router.post("/regist", function(req, res, next) {
    //直接接收post对象
    var user = req.body;
    //check format
    var regUsername = /^[a-zA-Z]+[a-zA-Z0-9_]*$/;
    var regId = /^[1-9]+[0-9]*$/;
    var regTel = /^[1-9]+[0-9]*$/;
    var regEmail = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9_]+\.)+[a-zA-Z]{2,4}$/;
    if (regUsername.test(req.body.username) && regId.test(req.body.id) &&
      regTel.test(req.body.tel) && regEmail.test(req.body.email)) {
      if(userManager.checkUser(user)!=0){//exist

      }
    }
  });

  router.get("/stream", function(req, res, next) {
    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "Connection": "keep-alive",
    });
    res.write("id: username\n");
    res.write("data: " + mUsername + "\n\n");
    mUsername = "";
    res.write("id: id\n");
    res.write("data: " + mId + "\n\n");
    mId = "";
    res.write("id: tel\n");
    res.write("data: " + mTel + "\n\n");
    mTel = "";
    res.write("id: email\n");
    res.write("data: " + mEmail + "\n\n");
    mEmail = "";
    res.end();
  });

  // routes below is protected by the login checker
  router.all('*', function(req, res, next) {
    req.session.user ? next() : res.redirect('/regist');
  });

  router.get("/information", function(req, res, next) {
    res.render("information", {
      title: "信息",
      user: req.session.user
    });
  });


  return router;
}
