$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("input#usernumber").val());
    var outputArray = [];

    for (var i = 0; i < userInput; i++) {
      if (outputArray[i].includes(3)) {
        outputArray.push("I'm sorry Dave, I can't do that.");
      }
      else if (outputArray[i].includes(2)) {
        outputArray.push("boop!");
      }
      else if (outputArray[i].includes(1)) {
        outputArray.push("beep!");
      }
      else {
        outputArray.push(i);
      }
    }
    
    $("#output").show();
    $("#output").text(outputArray + "," + userInput);

  });
});