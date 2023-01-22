var numberRandom = (Math.random() * 10).toFixed();
function numberGuessingGame() {
  let numberArea = document.querySelector("#numberArea").value;
  if (numberArea <= 1 || numberArea >= 10) {
    document.querySelector("#contentSonuc").innerHTML =
      "Enter numbers between 1 and 10!!!";
  } else if (numberArea > numberRandom) {
    document.querySelector("#contentSonuc").innerHTML = "Down";
  } else if (numberArea < numberRandom) {
    document.querySelector("#contentSonuc").innerHTML = "UP";
  } else if ((numberArea = numberRandom)) {
    document.querySelector("#contentSonuc").innerHTML =
      "Congratulations You Know";
  }
}
