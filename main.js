//Elements
var letsCookButton = document.querySelector(".cook-button");
var clearButton = document.querySelector(".clear-button");
var radios = document.getElementsByName("food");
var outPutElement = document.querySelector("#displayed-food");
var cookingPot = document.querySelector(".cooking-pot");
var displayedFood = document.querySelector(".chosen-meal");
//Arrays
var meals = {
  sides: ["Dumplings", "Fries", "Brussel sprouts", "asparagus"],
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
      var index = randomNumber(meals[radios[i].value].length);
      outPutElement.innerHTML = `${meals[radios[i].value][index]}!`;
      console.log(index);
      console.log(meals[radios[i].value]);
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
