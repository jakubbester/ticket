function start() {
  displayTime();
  moveTime();
  displayQRCode();
}

function displayTime() {
  var today = new Date();
  var year = today.getYear();
  if (year < 1000) {
    year += 1900;
  }
  var month = today.getMonth() + 1;
  var day = today.getDate();
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var period;
  if (hour < 12) {
    period = "AM";
  }
  else {
    period = "PM";
  }
  if (hour == 24) {
    hour = 0;
  }
  else if (hour > 12) {
    hour = hour - 12;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }
  document.getElementById("time_data").innerText = hour + ":" + minute + ":" + second + " " + period + " " + month + "/" + day + "/" + year;
  setTimeout("displayTime()", 1000);
}

var count = 15;
var movement = false;
function moveTime() {
  document.getElementById("time_data").style.left = count + "px";
  if (movement == false) {
    count++;
    if (count == 135) {
      movement = true;
    }
  }
  else {
    count--;
    if (count == 15) {
      movement = false;
    }
  }
  setTimeout("moveTime()", 50);
}

function makeid(length) {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

var qrcode = new QRCode(document.getElementById("qrcode"), makeid(100));
function displayQRCode() {
  qrcode.clear();
  qrcode.makeCode(makeid(100));
  setTimeout("displayQRCode()", 3000);
}
