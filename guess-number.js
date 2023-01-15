const numbInput = document.getElementById("input-box");
const checkButton = document.getElementById("check");
const resetButton = document.getElementById("reset");
const hiddenNumber = Math.trunc(Math.random() * 100);
const respond = document.querySelector(".guess-number");
const attemptField = document.querySelector(".attempt");
const image = document.getElementsByTagName("img");

function reset() {
  respond.innerHTML = "Write the Number";
  attemptField.innerHTML = `You left 7 attempts`;
  guesesLow = [];
  guesesHigh = []
  const hiddenNumber = Math.trunc(Math.random() * 100);
  attempt = 7;
  checkButton.disabled = false
}

resetButton.addEventListener("click", () => {
  reset();
});

let attempt = 7;
let guesesLow = [];
let guesesHigh = [];
checkButton.addEventListener("click", () => {
  if(numbInput.value < hiddenNumber){
  guesesLow.push(Number(numbInput.value))
} else{
  guesesHigh.push(Number(numbInput.value))
}
  attempt -= 1;
  attemptField.innerHTML = `You left ${attempt} attempt.`;
  if (numbInput.value > 100 || numbInput.value < 0) {
    alert("Please enter the number between 1-100");
  } else if (attempt === 0) {
    respond.innerHTML = `You Looose !!! Please click the reset button and try again.`
    checkButton.disabled = true;
  } else if (numbInput.value < hiddenNumber) {
    respond.innerHTML = `Your guess is ${
      numbInput.value
    }. Write bigger than ${Math.max(...guesesLow)} number.`;
  } else if (numbInput.value > hiddenNumber) {
    respond.innerHTML = `Your guess is ${
      numbInput.value
    }. Write smaller than ${Math.min(...guesesHigh)} number.`;
  } else if (numbInput.value == hiddenNumber) {
    respond.innerHTML = `The number is ${hiddenNumber}. CONGRULATIONS YOU WON !!! Please click the reset button to play again.`;
    checkButton.disabled = true
  }

  numbInput.value = "";
  numbInput.focus();
});
