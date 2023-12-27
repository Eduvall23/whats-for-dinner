//Elements
var letsCookButton = document.querySelector(".cook-button");
var clearButton = document.querySelector(".clear-button");
var radios = document.getElementsByName("food");
var outPutElement = document.querySelector("#displayed-food");
var cookingPot = document.querySelector(".cooking-pot");
var displayedFood = document.querySelector(".chosen-meal");
//Arrays
var meals = {
  sides: ["Dumplings", "Fries", "Brussel sprouts", "Asparagus"],
  mainDish: [
    "Sushi",
    "Spagetti",
    "Pizza",
    "Calamari",
    "Salmon",
    "Chicken alfredo",
  ],
  dessert: ["Cheesecake", "Lemon merinuge pie", "Brownies"],
};
//Event listeners
letsCookButton.addEventListener("click", function (event) {
  event.preventDefault();
  for (var i = 0, length = radios.length; i < length; i++) {
    
    if (radios[i].checked) {
      if (radios[i].value == "entireMeal") {
        var mainDish = meals.mainDish[randomNumber(meals.mainDish.length)];
        var side = meals.sides[randomNumber(meals.sides.length)];
        var dessert = meals.dessert[randomNumber(meals.dessert.length)];
        outPutElement.innerHTML = `${mainDish} with a side of ${side} and ${dessert} for dessert!`;
        outPutElement.style.fontSize = "30px";
      } else {
        var index = randomNumber(meals[radios[i].value].length);
        outPutElement.innerHTML = `${meals[radios[i].value][index]}!`;
        outPutElement.style.fontSize = "40px";
      }
      cookingPot.classList.add("hidden");
      displayedFood.classList.remove("hidden");

      break;
    }
  }
});
clearButton.addEventListener("click", clearBoxTwo);
//Functions
function randomNumber(arrayLength) {
  var round = arrayLength - 1;
  var random = Math.random() * round;
  return Math.round(random);
}
function clearBoxTwo() {
  outPutElement.innerHTML = ``;
  cookingPot.classList.remove("hidden");
  displayedFood.classList.add("hidden");
}
