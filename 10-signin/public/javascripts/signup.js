var messageBox = {
  username: {
    valid: false,
    message: "",
  },
  password: {
    valid: false,
    message: "",
  },
  repeatPassword: {
    valid: false,
    message: "",
  },
  id: {
    valid: false,
    message: "",
  },
  tel: {
    valid: false,
    message: "",
  },
  email: {
    valid: false,
    message: "",
  },
  x: showMessage,
};

var source = new EventSource("/stream");

source.onmessage = function(event) {
  switch (event.lastEventId) {
    case "username":
      if (event.data != "")
        messageBox.username.message = event.data;
      break;
    case "id":
      if (event.data != "")
        messageBox.id.message = event.data;
      break;
    case "tel":
      if (event.data != "")
        messageBox.tel.message = event.data;
      break;
    case "email":
      if (event.data != "")
        messageBox.email.message = event.data;
      break;
  }
  showMessage();
}

window.onload = function() {
  $("#username").bind("input propertychange", testUsername);

  $("#password").bind("input propertychange", testPassword);

  $("#repeat-password").bind("input propertychange", testRepeatPassword);

  $("#id").bind("input propertychange", testId);

  $("#tel").bind("input propertychange", testTel);

  $("#email").bind("input propertychange", testEmail);

  $("#reset").click(function() {
    messageBox.username.message = "";
    messageBox.username.valid = 0;
    $(".vUsername").text(messageBox.username.message);

    messageBox.password.message = "";
    messageBox.password.valid = 0;
    $(".vPassword").text(messageBox.password.message);

    messageBox.repeatPassword.message = "";
    messageBox.repeatPassword.valid = 0;
    $(".vRepeatPassword").text(messageBox.repeatPassword.message);

    messageBox.id.message = "";
    messageBox.id.valid = 0;
    $(".vId").text(messageBox.id.message);

    messageBox.tel.message = "";
    messageBox.tel.valid = 0;
    $(".vTel").text(messageBox.tel.message);

    messageBox.email.message = "";
    messageBox.email.valid = 0;
    $(".vEmail").text(messageBox.email.message);
  });
};

function testUsername() {
  var x = /^[a-zA-Z]+[a-zA-Z0-9_]*$/; //用户名6~18位英文字母、数字或下划线，必须以英文字母开头
  var y = this.value;
  messageBox.username.valid = 0;
  if (x.test(y)) {
    if (y.length < 6) messageBox.username.message = "用户名过短";
    else if (y.length > 18) messageBox.username.message = "用户名过长";
    else {
      messageBox.username.message = ""; //ok
      messageBox.username.valid = 1;
    }
  } else {
    if (y.length == 0) messageBox.username.message = "";
    else messageBox.username.message = "用户名只能是数字、字母以及下划线并且以字母开头";
  }
  $(".vUsername").text(messageBox.username.message);
}

function testPassword() {
  var x = /^[a-zA-Z0-9_-]+$/;
  var y = this.value;
  messageBox.password.valid = 0;
  if (x.test(y)) {
    if (y.length < 6) messageBox.password.message = "密码过短";
    else if (y.length > 18) messageBox.password.message = "密码过长";
    else {
      messageBox.password.message = ""; //ok
      messageBox.password.valid = 1;
    }
  } else {
    if (y.length == 0) messageBox.password.message = "";
    else messageBox.password.message = "密码只能包含数字、大小写字母、中划线和下划线";
  }
  $(".vPassword").text(messageBox.password.message);
}

function testRepeatPassword() {
  if (messageBox.password.valid == 1) {
    var y = this.value;
    if ($("#password").val() == y) {
      messageBox.repeatPassword.valid = 1;
      messageBox.repeatPassword.message = "";
    } else {
      if (y.length == 0) messageBox.repeatPassword.message = "";
      messageBox.repeatPassword.message = "密码不一致";
    }
  } else {
    messageBox.repeatPassword.message = "";
  }
  $(".vRepeatPassword").text(messageBox.repeatPassword.message);
}

function testId() {
  var x = /^[1-9]+[0-9]*$/; //学号8位数字，不能以0开头
  var y = this.value;
  messageBox.id.valid = 0;
  if (x.test(y) && y.length == 8) {
    messageBox.id.message = ""; //ok
    messageBox.id.valid = 1;
  } else if (y.length == 0) messageBox.id.message = "";
  else messageBox.id.message = "学号格式错误";
  $(".vId").text(messageBox.id.message);
}

function testTel() {
  var x = /^[1-9]+[0-9]*$/; //学号8位数字，不能以0开头
  var y = this.value;
  messageBox.tel.valid = 0;
  if (x.test(y) && y.length == 11) {
    messageBox.tel.message = ""; //ok
    messageBox.tel.valid = 1;
  } else if (y.length == 0) messageBox.tel.message = "";
  else messageBox.tel.message = "电话格式错误";
  $(".vTel").text(messageBox.tel.message);
}

function testEmail() {
  var x = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9_]+\.)+[a-zA-Z]{2,4}$/;
  var y = this.value;
  messageBox.email.valid = 0;
  if (x.test(y)) {
    messageBox.email.message = ""; //ok
    messageBox.email.valid = 1;
  } else if (y.length == 0) messageBox.email.message = "";
  else messageBox.email.message = "邮箱格式错误";
  $(".vEmail").text(messageBox.email.message);
}

function subTest() {
  if (messageBox.username.valid && messageBox.password.valid && messageBox.repeatPassword.valid &&
    messageBox.id.valid && messageBox.tel.valid && messageBox.email.valid) {
    return true;
  } else {
    alert("请正确填写信息！");
    return false;
  }
}

function showMessage() {
  $(".vUsername").text(messageBox.username.message);
  $(".vPassword").text(messageBox.password.message);
  $(".vRepeatPassword").text(messageBox.repeatPassword.message);
  $(".vId").text(messageBox.id.message);
  $(".vTel").text(messageBox.tel.message);
  $(".vEmail").text(messageBox.email.message);
}
