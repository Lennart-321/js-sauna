let isAcceptable = false;
do {
  let tempStr = window.prompt("Please set the temprature in Fahrenheit:");
  let tempratureFh = Number(tempStr);
  if (!tempratureFh) {
    continue;
  }
  tempratureC = fahrenheitToCelcius(tempratureFh);
  tempratureC = Math.round(tempratureC * 10) / 10; //Round to nearest 10th

  if (isToCold(tempratureC)) {
    isAcceptable = false;
    window.alert(
      tempratureC.toString() +
        "\u00B0" +
        "C - That is too cold! Reenter temprature..."
    );
  } else if (isToHot(tempratureC)) {
    isAcceptable = false;
    window.alert(
      tempratureC.toString() +
        "\u00B0" +
        "C - That is too hot! Reenter temprature..."
    );
  } else {
    window.alert(tempratureC.toString() + "\u00B0" + "C - Good!");
    isAcceptable = true;
  }
} while (!isAcceptable);

function fahrenheitToCelcius(fahrenheit) {
  return (fahrenheit - 32) / 1.8;
}
function isToCold(celcius) {
  return celcius < 73;
}
function isToHot(celcius) {
  return celcius > 75;
}
