const button = document.querySelector(".btn")
const questionTitle = document.querySelector(".questionTitle")
const choicesContainer= document.querySelector(".choices")
let currentQuestion = 0
const TIMER =document.querySelector(".timer")

// Questions
var questions = [
    {
        question: "This is question 1!",
        Choices: ["Answer 1", "Answer 2", "Answer 3"],
        Answer: "Answer 1"
    },
    {
        question: "This is question 2!",
        Choices: ["Answer 1a", "Answer 2a", "Answer 3a"],
        Answer: "Answer 1a"
    },
    {
        question: "This is question 3!",
        Choices: ["Answer 1b", "Answer 2b", "Answer 3b"],
        Answer: "Answer 1b", 
    },

]


// TIMER
// Selects element by class
var secondsLeft = 175;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;

    TIMER.textContent=secondsLeft

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
    }

  }, 1000);
}

function checkAnswer(){
    console.log(this.dataset.value)
    if (this.dataset.value !== questions[currentQuestion].answer) {
        console.log("here")
        secondsLeft=secondsLeft-15
        TIMER.textContent=secondsLeft
    }
    else {
        currentQuestion ++
        startQuiz()
    }
}


function startQuiz() {
    questionTitle.textContent= questions[currentQuestion].question
    choicesContainer.textContent=""
    for (let index = 0; index < questions[currentQuestion].Choices.length; index++) {
        var choiceBtn= document.createElement("button")
        choiceBtn.textContent=questions[currentQuestion].Choices[index]
        choiceBtn.setAttribute("data-value", questions[currentQuestion].Choices[index] )
        choiceBtn.addEventListener("click", checkAnswer)
        choicesContainer.appendChild(choiceBtn)
    }
}


button.addEventListener("click", function(){
    startQuiz()
    setTime()
});