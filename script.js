var numberRandom;

function initializeNumber() {
  numberRandom = Math.floor(Math.random() * 10) + 1; // Generate a random integer between 1 and 10
}

window.onload = function() {
  initializeNumber(); // Call the initializeNumber() function to generate a random number
};

function numberGuessingGame() {
  var numberArea = document.querySelector("#numberArea").value.trim(); // Get the user input number and remove any leading/trailing whitespace
  var number = Number(numberArea); // Convert the input value to a number

  if (numberArea === "" || isNaN(number) || !Number.isInteger(number) || number < 1 || number > 10) {
    // Check if the input is empty, not a number, not an integer, or outside the range of 1 to 10
    document.querySelector("#contentSonuc").innerHTML =
      "Enter an integer between 1 and 10!";
  } else if (number > numberRandom) {
    document.querySelector("#contentSonuc").innerHTML = "Down";
  } else if (number < numberRandom) {
    document.querySelector("#contentSonuc").innerHTML = "UP";
  } else if (number === numberRandom) {
    document.querySelector("#contentSonuc").innerHTML =
      "Congratulations! You guessed it right!";
      
      setTimeout(function() {
        window.location.reload(); // Reload the page after 3 seconds
      }, 3000); // 3000 milliseconds (3 seconds)
  }
}
