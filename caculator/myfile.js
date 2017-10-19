var str = new String;
var lastKey = new String;

window.onload = pageLoad;

function pageLoad() {
  document.getElementById('seven').addEventListener("click", function() {
    input('7');
  });
  document.getElementById('seven').addEventListener("mousedown", function() {
    mDown(this);
  });
  document.getElementById('seven').addEventListener("mouseup", function() {
    mUp(this);
  });

  document.getElementById('four').addEventListener("click", function() {
    input('4');
  });
  document.getElementById('four').addEventListener("mousedown", function() {
    mDown(this);
  });
  document.getElementById('four').addEventListener("mouseup", function() {
    mUp(this);
  });

  document.getElementById('one').addEventListener("click", function() {
    input('1');
  });
  document.getElementById('one').addEventListener("mousedown", function() {
    mDown(this);
  });
  document.getElementById('one').addEventListener("mouseup", function() {
    mUp(this);
  });

  document.getElementById('zero').addEventListener("click", function() {
    input('0');
  });
  document.getElementById('zero').addEventListener("mousedown", function() {
    mDown(this);
  });
  document.getElementById('zero').addEventListener("mouseup", function() {
    mUp(this);
  });

  document.getElementById('lBracket').addEventListener("click", function() {
    input('(');
  });
  document.getElementById('lBracket').addEventListener("mousedown", function() {
    mDown(this);
  });
  document.getElementById('lBracket').addEventListener("mouseup", function() {
    mUp(this);
  });

  document.getElementById('eight').addEventListener("click", function() {
    input('8');
  });
  document.getElementById('eight').addEventListener("mousedown", function() {
    mDown(this);
  });
  document.getElementById('eight').addEventListener("mouseup", function() {
    mUp(this);
  });

  document.getElementById('five').addEventListener("click", function() {
    input('5');
  });
  document.getElementById('five').addEventListener("mousedown", function() {
    mDown(this);
  });
  document.getElementById('five').addEventListener("mouseup", function() {
    mUp(this);
  });

  document.getElementById('two').addEventListener("click", function() {
    input('2');
  });
  document.getElementById('two').addEventListener("mousedown", function() {
    mDown(this);
  });
  document.getElementById('two').addEventListener("mouseup", function() {
    mUp(this);
  });

  document.getElementById('point').addEventListener("click", function() {
    input('.');
  });
  document.getElementById('point').addEventListener("mousedown", function() {
    mDown(this);
  });
  document.getElementById('point').addEventListener("mouseup", function() {
    mUp(this);
  });

  document.getElementById('rBracket').addEventListener("click", function() {
    input(')');
  });
  document.getElementById('rBracket').addEventListener("mousedown", function() {
    mDown(this);
  });
  document.getElementById('rBracket').addEventListener("mouseup", function() {
    mUp(this);
  });

  document.getElementById('nine').addEventListener("click", function() {
    input('9');
  });
  document.getElementById('nine').addEventListener("mousedown", function() {
    mDown(this);
  });
  document.getElementById('nine').addEventListener("mouseup", function() {
    mUp(this);
  });

  document.getElementById('six').addEventListener("click", function() {
    input('6');
  });
  document.getElementById('six').addEventListener("mousedown", function() {
    mDown(this);
  });
  document.getElementById('six').addEventListener("mouseup", function() {
    mUp(this);
  });

  document.getElementById('three').addEventListener("click", function() {
    input('3');
  });
  document.getElementById('three').addEventListener("mousedown", function() {
    mDown(this);
  });
  document.getElementById('three').addEventListener("mouseup", function() {
    mUp(this);
  });

  document.getElementById("backSpace").addEventListener("click", backSpace);
  document.getElementById('backSpace').addEventListener("mousedown", function() {
    mDown(this);
  });
  document.getElementById('backSpace').addEventListener("mouseup", function() {
    mUp(this);
  });

  document.getElementById("clear").addEventListener("click", clearAll);
  document.getElementById('clear').addEventListener("mousedown", function() {
    mDown(this);
  });
  document.getElementById('clear').addEventListener("mouseup", function() {
    mUp(this);
  });

  document.getElementById('divide').addEventListener("click", function() {
    input('/');
  });
  document.getElementById('divide').addEventListener("mousedown", function() {
    mDown(this);
  });
  document.getElementById('divide').addEventListener("mouseup", function() {
    mUp(this);
  });

  document.getElementById('multiply').addEventListener("click", function() {
    input('*');
  });
  document.getElementById('multiply').addEventListener("mousedown", function() {
    mDown(this);
  });
  document.getElementById('multiply').addEventListener("mouseup", function() {
    mUp(this);
  });

  document.getElementById('minus').addEventListener("click", function() {
    input('-');
  });
  document.getElementById('minus').addEventListener("mousedown", function() {
    mDown(this);
  });
  document.getElementById('minus').addEventListener("mouseup", function() {
    mUp(this);
  });

  document.getElementById('add').addEventListener("click", function() {
    input('+');
  });
  document.getElementById('add').addEventListener("mousedown", function() {
    mDown(this);
  });
  document.getElementById('add').addEventListener("mouseup", function() {
    mUp(this);
  });

  document.getElementById('is').addEventListener("click", is);
  document.getElementById('is').addEventListener("mousedown", function() {
    mDown(this);
  });
  document.getElementById('is').addEventListener("mouseup", function() {
    mUp(this);
  });
}

function mDown(obj) {
  obj.style.backgroundColor = "rgb(152, 152, 152)";
}

function mUp(obj) {
  obj.style.backgroundColor = "rgb(217,217,217)";
}

function input(n) {
  if ((n == '+') || (n == '-') || (n == '*') || (n == '/')) {
    if ((lastKey == '+') || (lastKey == '-') || (lastKey == '*') || (lastKey == '/')) {
      str = str.substring(0, str.length - 1);
    }
  }
  str += n;
  lastKey = n;
  document.getElementById("show").innerHTML = str;
}

function backSpace() {
  str = str.substring(0, str.length - 1);
  document.getElementById("show").innerHTML = str;
}

function clearAll() { //不能叫clear()
  str = new String;
  document.getElementById("show").innerHTML = str;
}

function is() {
  //((\d)+(\.*\d+)*))数字
  //^(((\d)+(\.*\d+)*)|\+|\-)开头数字、小数、或有符号
  //eval不会判断+-+-的错误
  try {
    eval(str);
  } catch (exception) {
    alert("invalid input!");
  }
  //var reg=/^(((\d)+(\.*\d+)*)|\+|\-)([/*-+]((\d)+(\.*\d+)*))*$/;
  str = eval(str);
  document.getElementById("show").innerHTML = str;
}
