var life; //判断是否结束
var cheatBool; //是否作弊

window.onload = function() {
  document.getElementsByClassName("start")[0].onmouseover = start;
}

function start() {
  life = 1;
  cheatBool = 0;
  lightColor(); //初始化
  document.getElementsByClassName("text")[0].innerText = "";
  document.getElementsByClassName("text")[0].style.fontSize = "22px";

  var light = document.getElementsByClassName("light");
  for (var i = 0; i < light.length; i++) {
    light[i].addEventListener("mouseover", lightDie);
  }

  var dark = document.getElementsByClassName("dark");
  for (var i = 0; i < dark.length; i++) {
    dark[i].addEventListener("mouseover", darkDie);
  }

  document.getElementsByClassName("maze")[0].onmouseleave = cheat;
  document.getElementsByClassName("end")[0].addEventListener("mouseover", end);
}

function lightDie() {
  life = 0;
  lose();
  this.style.backgroundColor = "red";
  document.getElementsByClassName("maze")[0].onmouseleave = lightColor;
}

function lightColor() {
  var light = document.getElementsByClassName("light");
  for (var i = 0; i < light.length; i++) {
    light[i].style.backgroundColor = "rgb(220, 220, 220)";
  }
}

function darkDie() {
  life = 0;
  lose();
}

function lose() {
  document.getElementsByClassName("text")[0].innerText = "You Lose";
}

function cheat() {
  cheatBool = 1;
}

function end() {
  if (cheatBool == 1 && life == 1) {
    document.getElementsByClassName("text")[0].innerText = "Don't cheat, you should start from the 'S' and move to the 'E' inside the maze!";
    document.getElementsByClassName("text")[0].style.fontSize = "17px";
  } else if (life == 1) {
    document.getElementsByClassName("text")[0].innerText = "You Win!";
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
