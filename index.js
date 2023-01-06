$(document).ready(function () {
  document.addEventListener("keydown", e => playSound(e.key.toUpperCase()));
});



function playSound(element) {
 (!$("#" + element)[0]) ? true :
  $("#" + element)[0].play();
  $("#display").text("Playing Pad: " + element ) 
}