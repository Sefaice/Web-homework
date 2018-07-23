var score = 0;
var x = 0;
var y = 0;
var time = 0;
var clock;

window.onload = function() {
  initialize();
  document.getElementsByClassName("start")[0].onclick = start;
}

function initialize() {
  var button = document.getElementsByClassName('button')[0];
  for (var i = 1; i <= 60; i++) { //创建radio
    var cell = document.createElement("input");
    cell.setAttribute("type", "radio");
    cell.className = "cell";
    cell.onclick = function() {
      this.checked = false;
    }
    button.appendChild(cell);
    if (i % 10 == 0) {
      var br = document.createElement("br");
      button.appendChild(br);
    }
  }
}

function start() {
  if (y == 1) { //click twice:end
    end();
  } else { //start
    score = 0;
    y = 1;
    time = 30;
    document.getElementsByClassName("status")[0].innerText = "Playing";
    document.getElementsByClassName("score")[0].innerText = score;
    var cell = document.getElementsByClassName("cell");
    for (var i = 0; i < 60; i++) {
      cell[i].addEventListener("click", judge);
    }
    fresh();
    countDown();
    clock = window.setInterval("countDown()", 1000);
  }
}

function end() {
  y = 0;
  document.getElementsByClassName("status")[0].innerText = "Game Over";
  alert("Game Over!\nYour score is: " + score);
  score = 0;
  document.getElementsByClassName("score")[0].innerText = score;
  time = 0;
  document.getElementsByClassName("time")[0].innerText = time;
  clock = clearInterval(clock);
}

function fresh() {
  var cell = document.getElementsByClassName("cell");
  x = random();
  cell[x].checked = true;
}

function countDown() {
  time--;
  document.getElementsByClassName("time")[0].innerText = time;
  if (time == 0) {
    end();
  }
}

function judge() {
  var cell = document.getElementsByClassName("cell");
  if (this == cell[x]) {
    cell[x].checked = false;
    add();
    fresh();
  } else {
    minus();
  }
}

function add() {
  score++;
  document.getElementsByClassName("score")[0].innerText = score;
}

function minus() {
  score--;
  document.getElementsByClassName("score")[0].innerText = score;
}

function random() {
  var a = Math.floor(Math.random() * 60);
  return a;
}
