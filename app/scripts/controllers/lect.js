'use strict';

angular.module('tabadulApp')
  .controller('lectCtrl', ['$scope', function($scope) {
    $scope.checkboxModel = {
      value1 : false,
      value2 : false
    };
  }]);


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
    document.getElementById("ueberpruefen1").removeAttribute("disabled");
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

function ueberpruefeCheckbox ()
{
  //var scope = angular.element($("#lectholder")).scope();
  var cbx1 = document.getElementById("cbx1").checked;
  var cbx2 = document.getElementById("cbx2").checked;
  if(cbx1 == true && cbx2 == false){
    document.getElementById("result").innerHTML = "Alles richtig!";
  }
  else {
    document.getElementById("result").innerHTML = "Leider falsch.";
  }
}

var aktSicht = 0;
function naechsteAufgabe () {
  var maxSicht = 2;
  if(aktSicht <= maxSicht) {
    document.getElementById("result").innerHTML = "";
    angular.element(document.getElementsByClassName("lect").item(aktSicht)).addClass("ng-hide");
    aktSicht++;
    angular.element(document.getElementsByClassName("lect").item(aktSicht)).removeClass("ng-hide");

    if (aktSicht == maxSicht) {
      angular.element(document.getElementById("btnNextAufgDone")).addClass("ng-hide");
    }
  }
  else
  {

  }
}

function ueberpruefeMatching() {
  var index;
  var correct = true;
  for (index = 0; index < document.getElementById("sortList1").getElementsByTagName("li").length; ++index) {
    if(document.getElementById("sortList1").getElementsByTagName("li").item(index).value !=
      document.getElementById("sortList2").getElementsByTagName("li").item(index).value)
    {
      correct = false;
    }
    if(correct){
      document.getElementById("result").innerHTML = "Alles richtig!";
    }
    else {
      document.getElementById("result").innerHTML = "Leider falsch.";
    }
  }
}
