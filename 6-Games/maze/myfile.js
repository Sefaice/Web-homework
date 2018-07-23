var life; //判断是否结束
var cheatBool; //是否作弊
var boolChoose = -1; //选择上次是作弊了还是输了

window.onload = function() {
  document.getElementsByClassName("start")[0].onmouseover = start;
}

function start() {
  life = 1;
  cheatBool = 0;
  if (boolChoose == 1) {
    document.getElementById("text").className = "oldTextOne";
  } else if (boolChoose == 2)
    document.getElementById("text").className = "oldTextTwo";
  boolChoose = -1;

  var light = document.getElementsByClassName("light");
  for (var i = 0; i < light.length; i++) {
    light[i].addEventListener("mouseover", lightDie);
  }

  var dark = document.getElementsByClassName("dark");
  for (var i = 0; i < dark.length; i++) {
    dark[i].addEventListener("mouseover", darkDie);
  }


  document.getElementsByClassName("maze")[0].onmouseleave = cheat;
  document.getElementsByClassName("maze")[0].addEventListener("mouseleave", backColor);
  document.getElementsByClassName("end")[0].addEventListener("mouseover", end);
}

function lightDie() {
  life = 0;
  lose();
  if (this.className.indexOf("left") != -1) {
    var u = document.getElementsByClassName("left");
    for (var i = 0; i < u.length; i++) {
      u[i].style.backgroundColor = "red";
    }
  } else if (this.className.indexOf("right") != -1) {
    var u = document.getElementsByClassName("right");
    for (var i = 0; i < u.length; i++) {
      u[i].style.backgroundColor = "red";
    }
  } else {
    this.style.backgroundColor = "red";
  }
}

function backColor() {
  var light = document.getElementsByClassName("light");
  for (var i = 0; i < light.length; i++) {
    light[i].style.backgroundColor = "rgb(220, 220, 220)";
  }
  var dark = document.getElementsByClassName("dark");
  for (var i = 0; i < dark.length; i++) {
    dark[i].style.backgroundColor = "rgb(220, 220, 220)";
  }
}

function darkDie() {
  life = 0;
  lose();
  if (this.className.indexOf("zuo") != -1) {
    document.getElementsByClassName("zuo")[0].style.backgroundColor = "red";
  } else if (this.className.indexOf("zhong") != -1) {
    document.getElementsByClassName("zhong")[0].style.backgroundColor = "red";
  } else {
    document.getElementsByClassName("you")[0].style.backgroundColor = "red";
  }
}

function lose() {
  document.getElementById("text").innerText = "You Lose";
  document.getElementById("text").className = "oneText";
  boolChoose = 1;
}

function cheat() {
  cheatBool = 1;
}

function end() {
  if (cheatBool == 1 && life == 1) {
    document.getElementById("text").innerText = "Don't cheat, you should start from the 'S' and move to the 'E' inside the maze!";
    document.getElementById("text").className = "twoText";
    boolChoose = 2;
  } else if (life == 1) {
    document.getElementById("text").innerText = "You Win!";
    document.getElementById("text").className = "oneText";
    boolChoose = 1;
  }

  var light = document.getElementsByClassName("light");
  for (var i = 0; i < light.length; i++) {
    light[i].removeEventListener("mouseover", lightDie);
  }

  var dark = document.getElementsByClassName("dark");
  for (var i = 0; i < dark.length; i++) {
    dark[i].removeEventListener("mouseover", darkDie);
  }

  document.getElementsByClassName("end")[0].removeEventListener("mouseover", end);
}
