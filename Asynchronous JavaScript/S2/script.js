$(document).ready(function() {
  var mask, history, message, setting, sign, sum; //life
  var _mask, _history, _message, _setting, _sign; //for click-check
  var bubble;

  $(".apb").hover(function() {
    initial();
  });

  $(".apb").click(function() { //use different function from user's action
    maskAI($(".mask"));
  });

  $(".info").click(function() {
    if (bubble) {
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
    $(".mask-unread, .history-unread, .setting-unread, .sign-unread, .message-unread").hide();
    light("null");
    $(".result").text("");
  }

  //trigger click会有背景色的渐变，但是用函数调用就不会有，为什么？？？？

  $(".mask").click(function() {
    if (mask && _mask) {
      dark(this);
      $(".mask-unread").show(300);
      $(".mask-unread").text("...");
      $.ajax({
        url: "/S2/mask",
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
        url: "/S2/mask",
        type: "GET",
        async: true,
        success: function(num) {
          $(".mask-unread").text(num);
          light("mask");
          mask = 0;
          $(".mask").css("background-color", "rgb(150, 150, 150)");
          sum += parseInt(num);
          isOver();
          historyAI($(".history"));
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
        url: "/S2/history",
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
        url: "/S2/history",
        type: "GET",
        async: true,
        success: function(num) {
          $(".history-unread").text(num);
          light("history");
          history = 0;
          $(".history").css("background-color", "rgb(150, 150, 150)");
          sum += parseInt(num);
          isOver();
          messageAI($(".message"));
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
        url: "/S2/message",
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
  });

  function messageAI() {
    if (message && _message) {
      dark(this);
      $(".message-unread").show(300);
      $(".message-unread").text("...");
      $.ajax({
        url: "/S2/message",
        type: "GET",
        async: true,
        success: function(num) {
          $(".message-unread").text(num);
          light("message");
          message = 0;
          $(".message").css("background-color", "rgb(150, 150, 150)");
          sum += parseInt(num);
          isOver();
          settingAI($(".setting"));
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
        url: "/S2/setting",
        type: "GET",
        async: true,
        success: function(num) {
          $(".setting-unread").text(num);
          light("setting");
          setting = 0;
          $(".setting").css("background-color", "rgb(150, 150, 150)");
          sum += parseInt(num);
          isOver();
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
        url: "/S2/setting",
        type: "GET",
        async: true,
        success: function(num) {
          $(".setting-unread").text(num);
          light("setting");
          setting = 0;
          $(".setting").css("background-color", "rgb(150, 150, 150)");
          sum += parseInt(num);
          isOver();
          signAI($(".sign"));
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
        url: "/S2/sign",
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
        url: "/S2/sign",
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
  }

  function isOver() {
    if (!mask && !history && !setting && !message && !sign) {
      bubble = 1;
      $(".info").css("background-color", "rgba(48, 63, 159, 1)");
      $(".info").trigger("click");
    }
  }

  function dark(button) {
    if (button.className != "mask" && mask && _mask) {
      $(".mask").css("background-color", "rgb(150, 150, 150)");
      _mask = 0;
    }
    if (button.className != "history" && history && _history) {
      $(".history").css("background-color", "rgb(150, 150, 150)");
      _history = 0;
    }
    if (button.className != "message" && message && _message) {
      $(".message").css("background-color", "rgb(150, 150, 150)");
      _message = 0;
    }
    if (button.className != "setting" && setting && _setting) {
      $(".setting").css("background-color", "rgb(150, 150, 150)");
      _setting = 0;
    }
    if (button.className != "sign" && sign && _sign) {
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
