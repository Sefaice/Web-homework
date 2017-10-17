var str = new String;

function pageLoad() {
  $("seven").onclick = input('7');
  $("seven").onmousedown = mDown(this);
  $("seven").onmouseup = mUp(this);
}

function mDown(obj) {
  obj.style.backgroundColor = "rgb(152, 152, 152)";
}

function mUp(obj) {
  obj.style.backgroundColor = "rgb(217,217,217)";
}

function input(n) {
  str += n.innerHTML;
  $("show").innerHTML = str;
}

function backSpace() {
  str = str.substring(0, str.length - 1);
  $("show").innerHTML = str;
}

function clearAll() { //不能叫clear()
  str = new String;
  $("show").innerHTML = str;
}

function is() {
  try {
    str = eval(str);
  } catch (exception) {
    alert(exception);
  }
  $("show").innerHTML = str;
}

window.onload = pageLoad;
