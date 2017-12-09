$(document).ready(function() {
  var mask, history, message, setting, sign, sum; //life
  var _mask, _history, _message, _setting, _sign; //for click-check
  var bubble;

  $(".apb").hover(function() {
    initial();
  });

  $(".apb").click(function() { //use different function from user's action

    dark(); //dark all!

    $(".mask-unread").show(300);
    $(".mask-unread").text("...");
    $.ajax({
      url: "/S3/mask",
      type: "GET",
      async: true,
      success: function(num) {
        $(".mask-unread").text(num);
        mask = 0;
        sum += parseInt(num);
        isOver();
      }
    });

    $(".history-unread").show(300);
    $(".history-unread").text("...");
    $.ajax({
      url: "/S3/history",
      type: "GET",
      async: true,
      success: function(num) {
        $(".history-unread").text(num);
        history = 0;
        sum += parseInt(num);
        isOver();
      }
    });

    $(".message-unread").show(300);
    $(".message-unread").text("...");
    $.ajax({
      url: "/S3/message",
      type: "GET",
      async: true,
      success: function(num) {
        $(".message-unread").text(num);
        message = 0;
        sum += parseInt(num);
        isOver();
      }
    });

    $(".setting-unread").show(300);
    $(".setting-unread").text("...");
    $.ajax({
      url: "/S3/setting",
      type: "GET",
      async: true,
      success: function(num) {
        $(".setting-unread").text(num);

        setting = 0;
        sum += parseInt(num);
        isOver();
      }
    });

    dark("sign");
    $(".sign-unread").show(300);
    $(".sign-unread").text("...");
    $.ajax({
      url: "/S3/sign",
      type: "GET",
      async: true,
      success: function(num) {
        $(".sign-unread").text(num);
        sign = 0;
        sum += parseInt(num);
        isOver();
      }
    });
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

  function isOver() {
    if (!mask && !history && !setting && !message && !sign) {
      bubble = 1;
      $(".info").css("background-color", "rgba(48, 63, 159, 1)");
      $(".info").trigger("click");
    }
  }

  function dark() {
      $(".mask").css("background-color", "rgb(150, 150, 150)");
      $(".history").css("background-color", "rgb(150, 150, 150)");
      $(".message").css("background-color", "rgb(150, 150, 150)");
      $(".setting").css("background-color", "rgb(150, 150, 150)");
      $(".sign").css("background-color", "rgb(150, 150, 150)");
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
