$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("input#usernumber").val());
    var intArray = [];
    var outputArray = [];

    for (var i = 0; i < userInput; i++) {
      intArray.push(i);
    }

    // for (var i = 0; i < intArray.length; i++) {
    //   if (intArray[i].includes(3)) {
    //     outputArray.push("I'm sorry Dave, I can't do that.");
    //   }
    //   else if (intArray[i].includes(2)) {
    //     outputArray.push("boop!");
    //   }
    //   else if (intArray[i].includes(1)) {
    //     outputArray.push("beep!");
    //   }
    //   else {
    //     outputArray.push(i);
    //   }
    // }
    
    $("#output").show();
    $("#output").text(intArray + "," + userInput);

  });
});