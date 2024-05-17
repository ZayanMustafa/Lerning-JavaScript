var question = [
    "1. Build a simple To-Do list application where users can add, delete, and mark tasks as completed.",
    "2. Create a countdown timer that takes user input for the time and counts down to zero.",
    "3. Develop a basic calculator that can perform addition, subtraction, multiplication, and division.",
    "4. Design a random quote generator that displays a new quote each time a button is clicked.",
    "5. Make a color guessing game where the user has to guess the correct color from RGB values.",
    "6. Create a digital clock that displays the current time and updates every second.",
    "7. Build a simple form validation script that checks user input in a form for specific criteria.",
    "8. Develop a Rock, Paper, Scissors game where the user plays against the computer.",
    "9. Create a photo gallery with a slideshow feature that automatically changes images every few seconds.",
    "10. Design a tip calculator that calculates the tip amount based on the bill total and tip percentage input by the user."
]

var allBoxes = document.getElementsByClassName("box");

console.log("boxes=>", allBoxes);

for (var i = 0; i < allBoxes.length; i++) {
  allBoxes[i].addEventListener("click", function () {
    clearAll();
    this.style.backgroundColor = "white";
    this.style.color = "black";
    this.style.fontSize = "18px";
    // var que = questions[this.innerText - 1];
    var que = question[Math.floor(Math.random() * 10)];
    this.innerText = que;
  });
}

function clearAll() {
  for (var i = 0; i < allBoxes.length; i++) {
    allBoxes[i].style.backgroundColor = "black";
    allBoxes[i].style.color = "white";
    allBoxes[i].style.fontSize = "30px";
    allBoxes[i].innerText = i + 1;
  }
}