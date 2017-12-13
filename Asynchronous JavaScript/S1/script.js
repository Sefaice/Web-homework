$(document).ready(function() {
  var mask, history, message, setting, sign, sum; //life
  var _mask, _history, _message, _setting, _sign; //for click-check
  var bubble;

  var maskXhr = "",
    historyXhr = "",
    messageXhr = "",
    settingXhr = "",
    signXhr = "";

  $(".apb").hover(function() {
    initial();
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
    if (maskXhr != "") {
      maskXhr.abort();
    }
    if (historyXhr != "") {
      historyXhr.abort();
    }
    if (messageXhr != "") {
      messageXhr.abort();
    }
    if (settingXhr != "") {
      settingXhr.abort();
    }
    if (signXhr != "") {
      signXhr.abort();
    }
  }

  $(".mask").click(function() {
    if (mask && _mask) {
      dark(this);
      $(".mask-unread").show(300);
      $(".mask-unread").text("...");
      maskXhr = $.ajax({
        url: "/S1/mask",
        type: "GET",
        async: true,
        success: function(num) {
          $(".mask-unread").text(num);
          light(this);
          mask = 0;
          $(".mask").css("background-color", "rgb(150, 150, 150)");
          sum += parseInt(num);
          isOver();
        }
      });
    }
  });

  $(".history").click(function() {
    if (history && _history) {
      dark(this);
      $(".history-unread").show(300);
      $(".history-unread").text("...");
      historyXhr = $.ajax({
        url: "/S1/history",
        type: "GET",
        async: true,
        success: function(num) {
          $(".history-unread").text(num);
          light(this);
          history = 0;
          $(".history").css("background-color", "rgb(150, 150, 150)");
          sum += parseInt(num);
          isOver();
        }
      });
    }
  });

  $(".message").click(function() {
    if (message && _message) {
      dark(this);
      $(".message-unread").show(300);
      $(".message-unread").text("...");
      messageXhr = $.ajax({
        url: "/S1/message",
        type: "GET",
        async: true,
        success: function(num) {
          $(".message-unread").text(num);
          light(this);
          message = 0;
          $(".message").css("background-color", "rgb(150, 150, 150)");
          sum += parseInt(num);
          isOver();
        }
      });
    }
  });

  $(".setting").click(function() {
    if (setting && _setting) {
      dark(this);
      $(".setting-unread").show(300);
      $(".setting-unread").text("...");
      settingXhr = $.ajax({
        url: "/S1/setting",
        type: "GET",
        async: true,
        success: function(num) {
          $(".setting-unread").text(num);
          light(this);
          setting = 0;
          $(".setting").css("background-color", "rgb(150, 150, 150)");
          sum += parseInt(num);
          isOver();
        }
      });
    }
  });

  $(".sign").click(function() {
    if (sign && _sign) {
      dark(this);
      $(".sign-unread").show(300);
      $(".sign-unread").text("...");
      signXhr = $.ajax({
        url: "/S1/sign",
        type: "GET",
        async: true,
        success: function(num) {
          $(".sign-unread").text(num);
          light(this);
          sign = 0;
          $(".sign").css("background-color", "rgb(150, 150, 150)");
          sum += parseInt(num);
          isOver();
        }
      });
    }
  });

  function isOver() {
    if (!mask && !history && !setting && !message && !sign) {
      bubble = 1;
      $(".info").css("background-color", "rgba(48, 63, 159, 1)");
    }
  }

  function disable(button) {
    if (button.className != "mask")
      mask = 0;
    if (button.className != "history")
      history = 0;
    if (button.className != "message")
      message = 0;
    if (button.className != "setting")
      setting = 0;
    if (button.className != "sign")
      sign = 0;
  }

  function enable(button) {
    if (button.className != "mask")
      mask = 1;
    if (button.className != "history")
      history = 1;
    if (button.className != "message")
      message = 1;
    if (button.className != "setting")
      setting = 1;
    if (button.className != "sign")
      sign = 1;
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
    if (button.className != "mask" && mask) {
      $(".mask").css("background-color", "rgba(48, 63, 159, 1)");
      _mask = 1;
    }
    if (button.className != "history" && history) {
      $(".history").css("background-color", "rgba(48, 63, 159, 1)");
      _history = 1;
    }
    if (button.className != "message" && message) {
      $(".message").css("background-color", "rgba(48, 63, 159, 1)");
      _message = 1;
    }
    if (button.className != "setting" && setting) {
      $(".setting").css("background-color", "rgba(48, 63, 159, 1)");
      _setting = 1;
    }
    if (button.className != "sign" && sign) {
      $(".sign").css("background-color", "rgba(48, 63, 159, 1)");
      _sign = 1;
    }
  }
});
