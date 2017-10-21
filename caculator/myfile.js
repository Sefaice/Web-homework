var str = new String;
var lastKey = new String;
var testNum = 1;

window.onload = pageLoad;

function pageLoad() {
  var a = document.getElementsByClassName('unit');
  for (var i = 0; i < a.length; i++) {
    a[i].onclick = input;
  }

  document.getElementById("backSpace").onclick = backSpace;

  document.getElementById("clear").onclick = clearAll;

  document.getElementById('is').onclick = is;
}

function input() {
  var n = this.innerText;
  if ((n == '+') || (n == '-') || (n == '*') || (n == '/')) {
    if ((lastKey == '+') || (lastKey == '-') || (lastKey == '*') || (lastKey == '/')) {
      str = str.substring(0, str.length - 1);
    }
  }
  if (n == '.') {
    if (lastKey == '.') {
      str = str.substring(0, str.length - 1);
    }
  }
  if (str.length == 0) {
    if (n == '.') {
      str = "0.";
    } else {
      str = n;
    }
  } else {
    str += n;
  }
  lastKey = n;
  document.getElementById("show").innerText = str;
}

function backSpace() {
  if ((str.length == 1) || (str == "Infinity")) {
    str = new String;
    document.getElementById("show").innerText = "0";
  } else if (str.length != 0) {
    str = str.substring(0, str.length - 1);
    document.getElementById("show").innerText = str;
  }
}

function clearAll() { //不能叫clear()
  str = new String;
  document.getElementById("show").innerText = "0";
}

function is() {
  //((\d)+(\.*\d+)*))数字
  //^(((\d)+(\.*\d+)*)|\+|\-)开头数字、小数、或有符号
  //var reg=/^(((\d)+(\.*\d+)*)|\+|\-)([/*-+]((\d)+(\.*\d+)*))*$/;
  //eval不会判断+-+-的错误
  //eval不会解决小数点后有符号的问题
  try {
    eval(str);
  } catch (exception) {
    testNum = 0;
    alert("invalid input!");
  }
  /*var reg1=".+";
  var reg2=".-";
  var reg3=".*";
  var reg4="./";
  if((reg1.test(str)==true)||(reg2.test(str)==true)||(reg3.test(str)==true)||(reg4.test(str)==true)){
    alert("invalid input!");
  }*/
  //精度问题
  //str = parseFloat(eval(str).toFixed(10));用parseFloat和toFixed解决
  if (testNum == 1) {
    str = parseFloat(eval(str).toFixed(15));
    str = str.toString();//eval计算后得到的不是string
  }
  document.getElementById("show").innerText = str;
}
