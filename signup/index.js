var http = require("http");
var url = require("url");
var querystring = require("querystring");
var fs = require("fs");

var mUsername = "",
  mId = "",
  mTel = "",
  mEmail = "";

//用moduleexports返回重复信息但是会重新请求html和css，怎么显示重复信息？
//用client side events,用户js端写好url区分


var _username = new Array(),
  _id = new Array(),
  _tel = new Array(),
  _email = new Array(); //存储信息...
var i = 0;

//异步怎样在第一次打开页面加载？

http.createServer(function(request, response) {
  var url = request.url;
  //截取css,js,ico,/(html)
  if (url === "/stream") {
    response.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "Connection": "keep-alive",
    });
    response.write("id: username\n");
    response.write("data: " + mUsername + "\n\n");
    mUsername = "";
    response.write("id: id\n");
    response.write("data: " + mId + "\n\n");
    mId = "";
    response.write("id: tel\n");
    response.write("data: " + mTel + "\n\n");
    mTel = "";
    response.write("id: email\n");
    response.write("data: " + mEmail + "\n\n");
    mEmail = "";
    response.end();
  } else {
    //接收form请求
    var body = "";
    request.on('data', function(chunk) {
      body += chunk;
    });
    request.on('end', function() {
      body = querystring.parse(body);
      var username = body.username;
      var id = body.id;
      var tel = body.tel;
      var email = body.email;
      if (username && id && tel && email) {
        //check used
        var y = 1;
        for (var c = 0; c < i; c++) {
          if (_username[c] == username) { mUsername = " 该用户名已被注册!"; y = 0;  }
          if (_id[c] == id) { mId = " 该学号已被注册!";  y = 0;  }
          if (_tel[c] == tel) { mTel = " 该电话已被注册!"; y = 0;  }
          if (_email[c] == email) { mEmail = " 该邮箱已被注册!"; y = 0;  }
        }
        //regex again
        var regUsername = /^[a-zA-Z]+[a-zA-Z0-9_]*$/;
        var regId = /^[1-9]+[0-9]*$/;
        var regTel = /^[1-9]+[0-9]*$/;
        var regEmail = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9_]+\.)+[a-zA-Z]{2,4}$/;
        if(!regUsername.test(username) || !regId.test(id) || !regTel.test(tel) || !regEmail.test(email)){
          y=0;
        }
        if (y == 0) { router(response, url) }
        else { //not used
          response.writeHead(301, {
            "Location": "?username=" + username
          });
          _username[i] = username;
          _id[i] = id;
          _tel[i] = tel;
          _email[i] = email;
          i++;
        }
      } else{ //初始页面
        router(response, url);
      }
      response.end();
    });
  }
}).listen(8000);

console.log("Server running at http://127.0.0.1:8000/");

function router(response, url){
  switch (url) {
    case "/":
      response.writeHead(200, {
        "Content-Type": "text/html"
      });
      var data = fs.readFileSync("index.html"); //同步读取文件
      response.write(data.toString());
      break;
    case "/style.css":
      response.writeHead(200, {
        "Content-Type": "text/css"
      });
      var data = fs.readFileSync("style.css");
      response.write(data.toString());
      break;
    case "/script.js":
      response.writeHead(200, {
        "Content-Type": "text/javascript"
      });
      var data = fs.readFileSync("script.js");
      response.write(data.toString());
      break;
    case "/favicon.ico":
      break;
    default:
      var index = url.lastIndexOf("username");
      var name = url.substr(index + 9);
      if (index != -1) {
        var exist = 0;
        for (var c = 0; c < i; c++) {
          if (_username[c] == name) {
            exist = 1;
            response.writeHead(300, {
              'Content-Type': 'text/html; charset=utf8'
            });
            response.write("<head>");
            response.write("<link rel='stylesheet' style='text/css' href='style.css'>");
            response.write("</head>");
            response.write("<body>");
            response.write("<div class='positioner'>");
            response.write("<p>用户信息</p>");
            response.write("<div class='cube'>");
            response.write("<p>用户名: " + _username[c] + "</p>");
            response.write("<p>学号: " + _id[c] + "</p>");
            response.write("<p>电话: " + _tel[c] + "</p>");
            response.write("<p>邮箱: " + _email[c] + "</p>");
            response.write("</div>");
            response.write("</div>");
            response.write("</body>");
          }
        }
        if (exist == 0) {//username doesnt exist
          response.writeHead(200, {
            "Content-Type": "text/html"
          });
          var data = fs.readFileSync("index.html");
          response.write(data.toString());
        }
      } else {
        response.writeHead(404, {
          "Content-Type": "text/plain"
        });
        response.write("Page Not Found");
      }
    }
}
