$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();

    var userNumber = $("input#usernumber").val();
    var userName = $("input#username").val();
    var intArray = [];
    var outputArray = [];
    
    var reg1 = /1/
    var reg2 = /2/
    var reg3 = /3/
    var regD = /^\d+$/

    if (regD.test(userNumber) === false) {
      alert("Do you think this is a game!?");
    }
    else if (regD.test(userName) === true) {
      alert("Enter a name with only letters pls");
    }
    else {
      for (var i = 0; i <= userNumber; i++) {
        intArray.push(i);
      }
      for (var i = 0; i < intArray.length; i++) {
        if (intArray[i] !== 0 && intArray[i] % 3 === 0) {
          outputArray.push("I'm sorry " + userName + ", I can't do that.");
        }
        else if (reg3.test(intArray[i]) === true) {
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
    }
  });
});

