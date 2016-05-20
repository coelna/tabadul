'use strict';

angular.module('tabadulApp')
  .controller('lectCtrl', function () {});

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();

  if(ev.target.childNodes.length > 0) {
    return;
  }
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));

  if(document.getElementById("divtarget1").hasChildNodes() && document.getElementById("divtarget2").hasChildNodes())
  {
    document.getElementById("ueberpruefen").removeAttribute("disabled");
  }
}

function ueberpruefeTexte () {
  var target1 = document.getElementById("divtarget1").firstElementChild.innerHTML;
  var target2 = document.getElementById("divtarget2").firstElementChild.innerHTML;
  var richtig1 = "worden ist";
  var richtig2 = "dass";
  if(target1 == richtig1 && target2 == richtig2){
    document.getElementById("result").innerHTML = "Alles richtig!";
  }
  else {
    document.getElementById("result").innerHTML = "Leider falsch.";
  }
}
document.getElementById("ueberpruefen").onclick = ueberpruefeTexte;
