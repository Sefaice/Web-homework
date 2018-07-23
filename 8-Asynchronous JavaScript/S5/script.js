/*1理解异步js与callback
  2本题中handler怎么在没有全局变量的情况下实现依次调用？
    -使用caller不断传回运行情况，一个函数循环调用，出现错误或者调用完毕都体现在函数返回值里
problem:仍有全局变量和不能取消ajax
*/

$(document).ready(function() {
  var mask, history, message, setting, sign;

  $(".apb").hover(function() {
    initial();
  });

  $(".apb").click(function() { //use different function from user's action
    initial();
    var str = randomList();
    caller(null, 0, str);
  });

  function initial() {
    mask = 1, history = 1, message = 1, setting = 1, sign = 1;
    $(".mask-unread, .history-unread, .setting-unread, .sign-unread, .message-unread").hide();
    light("null");
    $(".result").text("");
    $(".list").text("");
  }

  function aHandler(currentSum, str, callback) {
    dark("mask");
    $(".mask-unread").show(300);
    $(".mask-unread").text("...");
    $.ajax({
      url: "/S5/mask",
      type: "GET",
      async: true,
      success: function(num) {
        if (Math.random() < 0.1) { //error
          var error = "这是个小秘密";
          callback(error, currentSum + parseInt(num), str); //=caller(error, currentSum + num, str);
        } else {
          $(".mask-unread").text(num);
          $(".list").text("这是个天大的秘密");
          light("mask");
          mask = 0;
          $(".mask").css("background-color", "rgb(150, 150, 150)");
          callback(null, currentSum + parseInt(num), str);
        }
      }
    });
  }

  function bHandler(currentSum, str, callback) {
    dark("history");
    $(".history-unread").show(300);
    $(".history-unread").text("...");
    $.ajax({
      url: "/S5/history",
      type: "GET",
      async: true,
      success: function(num) {
        if (Math.random() < 0.1) { //error
          var error = "我知道";
          callback(error, currentSum + parseInt(num), str); //=caller(error, currentSum + num, str);
        } else {
          $(".history-unread").text(num);
          $(".list").text("我不知道");
          light("history");
          history = 0;
          $(".history").css("background-color", "rgb(150, 150, 150)");
          callback(null, currentSum + parseInt(num), str);
        }
      }
    });
  }

  function cHandler(currentSum, str, callback) {
    dark("message");
    $(".message-unread").show(300);
    $(".message-unread").text("...");
    $.ajax({
      url: "/S5/message",
      type: "GET",
      async: true,
      success: function(num) {
        if (Math.random() < 0.1) { //error
          var error = "你知道";
          callback(error, currentSum + parseInt(num), str); //=caller(error, currentSum + num, str);
        } else {
          $(".message-unread").text(num);
          $(".list").text("你不知道");
          light("message");
          message = 0;
          $(".message").css("background-color", "rgb(150, 150, 150)");
          callback(null, currentSum + parseInt(num), str);
        }
      }
    });
  }

  function dHandler(currentSum, str, callback) {
    dark("setting");
    $(".setting-unread").show(300);
    $(".setting-unread").text("...");
    $.ajax({
      url: "/S5/setting",
      type: "GET",
      async: true,
      success: function(num) {
        if (Math.random() < 0.1) { //error
          var error = "他知道";
          callback(error, currentSum + parseInt(num), str); //=caller(error, currentSum + num, str);
        } else {
          $(".setting-unread").text(num);
          $(".list").text("他不知道");
          light("setting");
          setting = 0;
          $(".setting").css("background-color", "rgb(150, 150, 150)");
          callback(null, currentSum + parseInt(num), str);
        }
      }
    });
  }

  function eHandler(currentSum, str, callback) {
    dark("sign");
    $(".sign-unread").show(300);
    $(".sign-unread").text("...");
    $.ajax({
      url: "/S5/sign",
      type: "GET",
      async: true,
      success: function(num) {
        if (Math.random() < 0.1) { //error
          var error = "是的";
          callback(error, currentSum + parseInt(num), str); //=caller(error, currentSum + num, str);
        } else {
          $(".sign-unread").text(num);
          $(".list").text("才怪");
          light("sign");
          sign = 0;
          $(".sign").css("background-color", "rgb(150, 150, 150)");
          callback(null, currentSum + parseInt(num), str);
        }
      }
    });
  }


  function caller(error, currentSum, str) {
    if (error != null) { //err occured
      $(".list").text(error);
    }
    if (str.length == 0) { //over
      $(".result").text(currentSum);
      return;
    } else { //continue recrusive
      var c = str[0];
      str = str.substr(1);
      switch (c) {
        case 'A':
          aHandler(currentSum, str, caller);
          break;
        case 'B':
          bHandler(currentSum, str, caller);
          break;
        case 'C':
          cHandler(currentSum, str, caller);
          break;
        case 'D':
          dHandler(currentSum, str, caller);
          break;
        case 'E':
          eHandler(currentSum, str, caller);
          break;
      }
    }
  }

  function randomList() {
    var i = 0,
      j = 0;
    var a = new Array(5);
    while (i < 5) {
      var n = Math.floor(Math.random() * 5);
      y = 1; //check used
      for (j = 0; j < i; j++) {
        if (a[j] == n)
          y = 0;
      }
      if (y == 1) {
        a[i] = n;
        i++;
      }
    }
    var str = "";
    for (i = 0; i < 5; i++) {
      if (a[i] == 0)
        str += 'A';
      if (a[i] == 1)
        str += 'B';
      if (a[i] == 2)
        str += 'C';
      if (a[i] == 3)
        str += 'D';
      if (a[i] == 4)
        str += 'E';
    }
    return str;
  }


  function dark(button) {
    if (button != "mask" && mask) {
      $(".mask").css("background-color", "rgb(150, 150, 150)");
      _mask = 0;
    }
    if (button != "history" && history) {
      $(".history").css("background-color", "rgb(150, 150, 150)");
      _history = 0;
    }
    if (button != "message" && message) {
      $(".message").css("background-color", "rgb(150, 150, 150)");
      _message = 0;
    }
    if (button != "setting" && setting) {
      $(".setting").css("background-color", "rgb(150, 150, 150)");
      _setting = 0;
    }
    if (button != "sign" && sign) {
      $(".sign").css("background-color", "rgb(150, 150, 150)");
      _sign = 0;
    }
  }

  function light(button) {
    if (button != "mask" && mask) {
      $(".mask").css("background-color", "rgba(48, 63, 159, 1)");
      _mask = 1;
    }
    if (button != "history" && history) {
      $(".history").css("background-color", "rgba(48, 63, 159, 1)");
      _history = 1;
    }
    if (button != "message" && message) {
      $(".message").css("background-color", "rgba(48, 63, 159, 1)");
      _message = 1;
    }
    if (button != "setting" && setting) {
      $(".setting").css("background-color", "rgba(48, 63, 159, 1)");
      _setting = 1;
    }
    if (button != "sign" && sign) {
      $(".sign").css("background-color", "rgba(48, 63, 159, 1)");
      _sign = 1;
    }
  }


});
