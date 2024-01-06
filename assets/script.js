// Questions
var questions = [
    {
        question 1: This is question 1!
        Answer One
        Answer Two 
        Answer Three
    },
    {
        question 1: This is question 2!
        Answer One
        Answer Two 
        Answer Three
    },
    {
        question 1: This is question 3!
        Answer One
        Answer Two 
        Answer Three
    }
]


// TIMER
// Selects element by class
var secondsLeft = 10;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}





button.addEventListener("click", function());