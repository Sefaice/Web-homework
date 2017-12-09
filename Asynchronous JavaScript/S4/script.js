$(document).ready(function() {
  var mask, history, message, setting, sign, sum; //life
  var _mask, _history, _message, _setting, _sign; //for click-check
  var bubble;
  var arr = new Array();
  var count; // click button in order

  $(".apb").hover(function() {
    initial();
  });

  $(".apb").click(function() { //use different function from user's action
    initial();
    arr = randomList();
    var str = "";
    for (var i = 0; i < 5; i++) {
      if (arr[i] == 0)
        str += 'A ';
      if (arr[i] == 1)
        str += 'B ';
      if (arr[i] == 2)
        str += 'C ';
      if (arr[i] == 3)
        str += 'D ';
      if (arr[i] == 4)
        str += 'E ';
    }
    $(".list").text(str);
    triggerAI();
  });

  function triggerAI() {
    if (count < 5) {
      if (arr[count] == 0)
        maskAI($(".mask"));
      if (arr[count] == 1)
        historyAI($(".history"));
      if (arr[count] == 2)
        messageAI($(".message"));
      if (arr[count] == 3)
        settingAI($(".setting"));
      if (arr[count] == 4)
        signAI($(".sign"));
      count++;
    }
  }

  $(".info").click(function() {
    if (bubble) {
      $(".list").text("");
      $(".result").text(sum);
      $(".info").css("background-color", "rgb(150, 150, 150)");
      bubble = 0;
    }
  });

  function initial() {
    mask = 1, history = 1, message = 1, setting = 1, sign = 1;
    _mask = 1, _history = 1, _message = 1, _setting = 1, _sign = 1;
    sum = 0;
    bubble = 0;
    count = 0;
    $(".mask-unread, .history-unread, .setting-unread, .sign-unread, .message-unread").hide();
    light("null");
    $(".result").text("");
    $(".list").text("");
  }

  function randomList() {
    var i = 0,
      j = 0;
    var a = new Array(5);
    while (i < 5) {
      var n = Math.floor(Math.random() * 5);
      var y = 1; //check used
      for (j = 0; j < i; j++) {
        if (a[j] == n)
          y = 0;
      }
      if (y == 1) {
        a[i] = n;
        i++;
      }
    }
    return a;
  }

  $(".mask").click(function() {
    if (mask && _mask) {
      dark(this);
      $(".mask-unread").show(300);
      $(".mask-unread").text("...");
      $.ajax({
        url: "/S4/mask",
        type: "GET",
        async: true,
        success: function(num) {
          $(".mask-unread").text(num);
          light("mask");
          mask = 0;
          $(".mask").css("background-color", "rgb(150, 150, 150)");
          sum += parseInt(num);
          isOver();
        }
      });
    }
  });

  function maskAI() {
    if (mask && _mask) {
      dark(this);
      $(".mask-unread").show(300);
      $(".mask-unread").text("...");
      $.ajax({
        url: "/S4/mask",
        type: "GET",
        async: true,
        success: function(num) {
          $(".mask-unread").text(num);
          light("mask");
          mask = 0;
          $(".mask").css("background-color", "rgb(150, 150, 150)");
          sum += parseInt(num);
          isOver();
          triggerAI();
        }
      });
    }
  }

  $(".history").click(function() {
    if (history && _history) {
      dark(this);
      $(".history-unread").show(300);
      $(".history-unread").text("...");
      $.ajax({
        url: "/S4/history",
        type: "GET",
        async: true,
        success: function(num) {
          $(".history-unread").text(num);
          light("history");
          history = 0;
          $(".history").css("background-color", "rgb(150, 150, 150)");
          sum += parseInt(num);
          isOver();
        }
      });
    }
  });

  function historyAI() {
    if (history && _history) {
      dark(this);
      $(".history-unread").show(300);
      $(".history-unread").text("...");
      $.ajax({
        url: "/S4/history",
        type: "GET",
        async: true,
        success: function(num) {
          $(".history-unread").text(num);
          light("history");
          history = 0;
          $(".history").css("background-color", "rgb(150, 150, 150)");
          sum += parseInt(num);
          isOver();
          triggerAI();
        }
      });
    }
  }

  $(".message").click(function() {
    if (message && _message) {
      dark(this);
      $(".message-unread").show(300);
      $(".message-unread").text("...");
      $.ajax({
        url: "/S4/message",
        type: "GET",
        async: true,
        success: function(num) {
          $(".message-unread").text(num);
          light("message");
          message = 0;
          $(".message").css("background-color", "rgb(150, 150, 150)");
          sum += parseInt(num);
          isOver();
          triggerAI();
        }
      });
    }
  });

  function messageAI() {
    if (message && _message) {
      dark(this);
      $(".message-unread").show(300);
      $(".message-unread").text("...");
      $.ajax({
        url: "/S4/message",
        type: "GET",
        async: true,
        success: function(num) {
          $(".message-unread").text(num);
          light("message");
          message = 0;
          $(".message").css("background-color", "rgb(150, 150, 150)");
          sum += parseInt(num);
          isOver();
        }
      });
    }
  }

  $(".setting").click(function() {
    if (setting && _setting) {
      dark(this);
      $(".setting-unread").show(300);
      $(".setting-unread").text("...");
      $.ajax({
        url: "/S4/setting",
        type: "GET",
        async: true,
        success: function(num) {
          $(".setting-unread").text(num);
          light("setting");
          setting = 0;
          $(".setting").css("background-color", "rgb(150, 150, 150)");
          sum += parseInt(num);
          isOver();
          triggerAI();
        }
      });
    }
  });

  function settingAI() {
    if (setting && _setting) {
      dark(this);
      $(".setting-unread").show(300);
      $(".setting-unread").text("...");
      $.ajax({
        url: "/S4/setting",
        type: "GET",
        async: true,
        success: function(num) {
          $(".setting-unread").text(num);
          light("setting");
          setting = 0;
          $(".setting").css("background-color", "rgb(150, 150, 150)");
          sum += parseInt(num);
          isOver();
          triggerAI();
        }
      });
    }
  }

  $(".sign").click(function() {
    if (sign && _sign) {
      dark(this);
      $(".sign-unread").show(300);
      $(".sign-unread").text("...");
      $.ajax({
        url: "/S4/sign",
        type: "GET",
        async: true,
        success: function(num) {
          $(".sign-unread").text(num);
          light("sign");
          sign = 0;
          $(".sign").css("background-color", "rgb(150, 150, 150)");
          sum += parseInt(num);
          isOver();
        }
      });
    }
  });

  function signAI() {
    if (sign && _sign) {
      dark(this);
      $(".sign-unread").show(300);
      $(".sign-unread").text("...");
      $.ajax({
        url: "/S4/sign",
        type: "GET",
        async: true,
        success: function(num) {
          $(".sign-unread").text(num);
          light("sign");
          sign = 0;
          $(".sign").css("background-color", "rgb(150, 150, 150)");
          sum += parseInt(num);
          isOver();
          triggerAI();
        }
      });
    }
  }

  function isOver() {
    if (!mask && !history && !setting && !message && !sign) {
      bubble = 1;
      $(".info").css("background-color", "rgba(48, 63, 159, 1)");
      $(".info").trigger("click");
    }
  }

  function dark(button) {
    if (button.className != "mask" && mask) {
      $(".mask").css("background-color", "rgb(150, 150, 150)");
      _mask = 0;
    }
    if (button.className != "history" && history) {
      $(".history").css("background-color", "rgb(150, 150, 150)");
      _history = 0;
    }
    if (button.className != "message" && message) {
      $(".message").css("background-color", "rgb(150, 150, 150)");
      _message = 0;
    }
    if (button.className != "setting" && setting) {
      $(".setting").css("background-color", "rgb(150, 150, 150)");
      _setting = 0;
    }
    if (button.className != "sign" && sign) {
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
