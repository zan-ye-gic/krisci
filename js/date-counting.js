var dv = document.getElementById("login-top");
dv.style.opacity = 0;
var val = 0;
var fadeInterval;
var fadeinInterval;

function timer() {
  var start = new Date(2022, 4, 12, 0, 0);
  var t = new Date() - start;
  var d = Math.floor(t / 1000 / 60 / 60 / 24);
  var h = Math.floor((t / 1000 / 60 / 60) % 24);
  if (h < 10) {
    h = "0" + h;
  }
  var m = Math.floor((t / 1000 / 60) % 60);
  if (m < 10) {
    m = "0" + m;
  }
  var s = Math.floor((t / 1000) % 60);
  if (s < 10) {
    s = "0" + s;
  }
  document.getElementById("d").innerHTML = d;
  document.getElementById("h").innerHTML = h;
  document.getElementById("m").innerHTML = m;
  document.getElementById("s").innerHTML = s;
}

timer();
setInterval(timer, 1000);

function fadein() {
  if (val < 1) {
    val += 0.025;
    dv.style.opacity = val;
  } else {
    clearInterval(fadeinInterval);
  }
}

fadeInterval = setInterval(function () {
    clearInterval(fadeInterval);
    fadeinInterval = setInterval(fadein, 50);
}, 1000);
