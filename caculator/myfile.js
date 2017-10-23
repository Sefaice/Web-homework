var str = new String;
var lastKey = new String;

window.onload = pageLoad;

function pageLoad() {
  //也可以用addEventListener来做
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
    if ((n == '.') || (n == '+') || (n == '-') || (n == '*') || (n == '/')) {
      str = "0" + n;
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
  try { //对于异常处理，括号匹配在转换rpn形式的时候检查了；但是反括号在先这种错误需要在这里用try检查
    //caculate函数计算后缀表达式的时候正常的式子会正常计算，但是若有错误便会捕捉到异常，出现stack为0这种异常
    str = caculate(str);
  } catch (error) {
    alert("Invalid input!");
  }
  document.getElementById("show").innerText = str;
}

function isOperator(n) {
  return ((n == "+") || (n == "-") || (n == "*") || (n == "/"));
}

function isNum(n) {
  var reg = /^-?\d+\.?\d*$/; //数字正则表达式
  return reg.test(n);
}

function getWeight(n) {
  switch (n) {
    case '*':
      return 2;
    case '/':
      return 2;
    case '+':
      return 1;
    case '-':
      return 1;
    default:
      return 0;
  }
}

function compare(a, b) {
  return getWeight(a) >= getWeight(b);
}

//把中缀表达式转为后缀表达式
//数字直接进数组，运算符与栈顶比较优先级，若小于等于栈顶就把栈顶输出
//左括号进栈，右括号输出直到左括号，同时可检查括号是否匹配
function getRPN(str) {
  var reg = /(\+|\-|\*|\/|\(|\))/;
  var exp = str.split(reg).filter(item => item !== "");
  var output = [];
  var stack = [];
  for (var i = 0; i < exp.length; i++) {
    var item = exp[i];
    if (isNum(item) == 1) {
      output.push(item);
    }
    if (isOperator(item) || item == "(") {
      if (item == "(") {
        stack.push(item);
      } else {
        var top = stack[stack.length - 1];
        while (compare(top, item) && stack.length > 0) {
          stack.pop();
          output.push(top);
          top = stack[stack.length - 1];
        }
        stack.push(item);
      }
    } else if (item == ")") {
      while (true) {
        if (stack.length == 0) {
          throw new Error("Invalid input!");
          break;
        }
        var top = stack[stack.length - 1];
        stack.pop();
        if (top != "(") {
          output.push(top);
        } else {
          break;
        }
      }
    }
  }
  //循环结束
  while (stack.length > 0) {
    var top = stack[stack.length - 1];
    stack.pop();
    output.push(top);
  }
  return output;
}

function caculate(str) {
  var output = getRPN(str);
  var stack = [];
  for (var i = 0; i < output.length; i++) {
    var item = output[i];
    if (isNum(item)) {
      stack.push(item);
    } else {
      switch (item) {
        case "+":
          var a = stack[stack.length - 1];
          stack.pop();
          var b = stack[stack.length - 1];
          stack.pop();
          stack.push(add(a, b));
          break;
        case "-":
          var b = stack[stack.length - 1];
          stack.pop();
          if (stack.length == 0) { //开头为-2这样的情况，注意先后顺序
            b = -b;
            stack.push(b);
          } else {
            var a = stack[stack.length - 1];
            stack.pop();
            stack.push(sub(a, b));
          }
          break;
        case "*":
          var a = stack[stack.length - 1];
          stack.pop();
          var b = stack[stack.length - 1];
          stack.pop();
          stack.push(mul(a, b));
          break;
        case "/":
          var b = stack[stack.length - 1];
          stack.pop();
          var a = stack[stack.length - 1];
          stack.pop();
          stack.push(div(a, b));
          break;
      }
    }
  }
  return stack[0];
}

//先都化为整数，再计算即可避免浮点数精度问题
function add(a, b) {
  var lena;
  try {
    lena = a.toString().split(".")[1].length;
  } catch (error) {
    lena = 0;
  }
  var lenb;
  try {
    lenb = b.toString().split(".")[1].length;
  } catch (error) {
    lenb = 0;
  }
  var p = Math.max(lena, lenb);
  a = Number(a.toString()) * Math.pow(10, p);
  b = Number(b.toString()) * Math.pow(10, p);
  var r = (a + b) / Math.pow(10, p);
  return r;
}

function sub(a, b) {
  var lena;
  try {
    lena = a.toString().split(".")[1].length;
  } catch (error) {
    lena = 0;
  }
  var lenb;
  try {
    lenb = b.toString().split(".")[1].length;
  } catch (error) {
    lenb = 0;
  }
  var p = Math.max(lena, lenb);
  a = Number(a.toString()) * Math.pow(10, p);
  b = Number(b.toString()) * Math.pow(10, p);
  var r = (a - b) / Math.pow(10, p);
  return r;
}

function mul(a, b) {
  var lena;
  try {
    lena = a.toString().split(".")[1].length;
  } catch (error) {
    lena = 0;
  }
  var lenb;
  try {
    lenb = b.toString().split(".")[1].length;
  } catch (error) {
    lenb = 0;
  }
  var p = lena + lenb;
  a = Number(a.toString().replace(".", ""));
  b = Number(b.toString().replace(".", ""));
  var r = (a * b) / Math.pow(10, p);
  return r;
}

function div(a, b) {
  var lena;
  try {
    lena = a.toString().split(".")[1].length;
  } catch (error) {
    lena = 0;
  }
  var lenb;
  try {
    lenb = b.toString().split(".")[1].length;
  } catch (error) {
    lenb = 0;
  }
  var p = lena - lenb;
  a = Number(a.toString().replace(".", ""));
  b = Number(b.toString().replace(".", ""));
  var r = (a / b) / Math.pow(10, p);
  return r;
}
