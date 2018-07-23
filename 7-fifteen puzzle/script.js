var showImg = 0;
var life=0;

window.onload = function() {
  initial();
}

function initial() {
  //布局初始化
  for (var i = 0; i < 16; i++) {
    var mid = document.getElementById("mid");
    var cell = document.createElement("div");
    cell.className = "cell";
    cell.id = i;
    mid.appendChild(cell);
    if (i % 4 == 3) {
      var br = document.createElement("br");
      mid.appendChild(br);
    }
  }
  throwImg();
  //按钮点事件
  $(".answer").click(function() {
    if (showImg == 0) {
      $("#answer").css("opacity", 1);
      showImg = 1;
    } else {
      $("#answer").css("opacity", 0);
      showImg = 0;
    }
  });
  $(".button").click(function() { //重新开始按钮
    clear();
    throwImg();
  });
  //clock
  var clock=window.setInterval("isOver()",30);
}

function clear() {
  for (var i = 0; i < 16; i++) {
    if ($(".cell")[i].childNodes[0] != undefined)
      $(".cell")[i].removeChild($(".cell")[i].childNodes[0]);
  }
}

function throwImg() { //乱序
  var cell = document.getElementsByClassName("cell");
  var array = random();
  for (var i = 0; i < cell.length - 1; i++) {
    var j = array[i];
    var unit = document.createElement("div");
    unit.className = "unit img " + j;
    unit.id = j;
    var x = 100 / 3 * (j % 4) + "%";
    var y = 100 / 3 * (Math.floor(j / 4)) + "%";
    unit.style.backgroundPosition = x + y;
    unit.addEventListener("click", move);
    cell[i].appendChild(unit);
  }
  /*
  var unit = document.createElement("div");
  unit.className = "unit grey 15";
  unit.id = 15;
  cell[i].appendChild(unit);
  */
}

function move() {
  var father = parseInt(this.parentNode.id);
  //top
  var a = father - 4;
  if (a >= 0 && a <= 15) {
    if ($(".cell")[a].childNodes[0] == undefined) { //找到交换对象
      $(".cell")[a].appendChild(this);
      return;
    }
  }
  //bottom
  var b = father + 4;
  if (b >= 0 && b <= 15) {
    if ($(".cell")[b].childNodes[0] == undefined) {
      $(".cell")[b].appendChild(this);
      return;
    }
  }
  //left
  var c = father - 1;
  if (c >= 0 && c <= 15) {
    if (($(".cell")[c].childNodes[0] == undefined) && (father % 4 != 0)) {
      $(".cell")[c].appendChild(this);
      return;
    }
  }
  //right
  var d = father + 1;
  if (d >= 0 && d <= 15) {
    if (($(".cell")[d].childNodes[0] == undefined) && (father % 4 != 3)) {
      $(".cell")[d].appendChild(this);
      return;
    }
  }
}

function isOver() {
  for (var i = 0; i < 16; i++) {
    if ($(".cell")[i].childNodes[0] != undefined) {
      if ($(".cell")[i].childNodes[0].id != i) {
        return;
      }
    }
  }
  alert("You Win!");
  clear();
  throwImg();
}

function random() {
  var array = new Array();
  var i = 0;
  while (i < 15) {
    var y = 1;
    var x = Math.floor(Math.random() * 15); //0-14随机数
    for (var j = 0; j < i; j++) {
      if (array[j] == x) {
        y = 0;
        break;
      }
    }
    if (y == 1) {
      array[i] = x;
      i++;
    }
  }
  while (inversion(array) == false) {
    array = random();
  }
  return array;
}

function inversion(array) { //由逆序数判断是否可以还原
  var s = 0;
  for (var i = 0; i < array.length; i++) {
    var n = array[i];
    for (var j = 0; j < i; j++) {
      if (array[j] > n)
        s++;
    }
  }
  if (s % 2 == 1) {
    return false;
  } else
    return true;
}
