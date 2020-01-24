$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();

    var userInput = $("input#usernumber").val();
    var intArray = [];
    var outputArray = [];
    
    var reg1 = /1/
    var reg2 = /2/
    var reg3 = /3/
    var regD = /\D+/

    for (var i = 0; i < userInput; i++) {
      if (regD.test(userInput) === true) {
        alert("Do you think this is a game!?");
      }
      else {
      intArray.push(i);
      }
    }

    for (var i = 0; i <= intArray.length; i++) {
      if (reg3.test(intArray[i]) === true) {
        outputArray.push("I'm sorry Dave, I can't do that.");
      }
      else if (reg2.test(intArray[i]) === true) {
        outputArray.push("boop!");
      }
      else if (reg1.test(intArray[i]) === true) {
        outputArray.push("beep!");
      }
      else {
        outputArray.push(i);
      }
    }
    
    $("#output").show();
    $("#output").text(outputArray);

  });
});

