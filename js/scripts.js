$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("input#usernumber").val());
    var outputArray = [];

    for (var i = 0; i < userInput; i++) {
      outputArray.push(i);
    }

    $("#output").show();
    $("#output").text(outputArray + "," + userInput);

  });
});