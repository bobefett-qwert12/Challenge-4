var secondsLeft = 120;
var currentQuestion = 0;
var finalScore = 0;

var timerEl = document.querySelector(".timer");
var buttonEl = document.querySelectorAll("button");
var h1El = document.querySelector("h1");
var h3El = document.querySelector("h3");
var pEl = document.querySelectorAll("p");
var formEl = document.createElement("form");
var inputTextEl = document.createElement("input");
var inputSubmitEl = document.createElement("input");
var timerInterval;

function setTime() {
    // Sets interval in variable
    timerInterval = setInterval(function() {
      secondsLeft--;
      timerEl.textContent = "Time: " + secondsLeft;
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
      }
    }, 1000);
}

function handleTimeout(text) {
    h1El.textContent = text;
    for(var i=0; i<buttonEl.length; i++){
        buttonEl[i].setAttribute("style", "display: none;");
    }
    inputTextEl.setAttribute("type", "text");
    inputSubmitEl.setAttribute("type", "submit");
    inputTextEl.setAttribute("style", "display: block;");
    inputSubmitEl.setAttribute("style", "display: block;");
    var h3FormEl = document.createElement("h3");
    h3FormEl.textContent = "Input your initials and submit your time!";
    formEl.appendChild(h3FormEl);
    formEl.appendChild(inputTextEl);
    formEl.appendChild(inputSubmitEl);
    document.body.appendChild(formEl);
}

for(var j = 0; j < buttonEl.length; j++){
    buttonEl[j].addEventListener("click", function(event){
        currentQuestion++;
        var timeout;
        //Checks if last answer was correct
        if (currentQuestion > 1){
            if (event.target.dataset.answer === "right"){
                h3El.textContent = "Correct!";
             } else if (event.target.dataset.answer === "wrong"){
                h3El.textContent = "Wrong!";
                secondsLeft -= 10;
             };
        }
        //Sets the current question, sets buttons as answers
        if (currentQuestion === 1){
            timeout = setTimeout(handleTimeout("Sorry, you ran out of time!"), (secondsLeft*1000));
            setTime();
            for(var i = 1; i<pEl.length; i++){
                pEl[i].setAttribute("style", "display: none;");
            }
            for(var i = 0; i<buttonEl.length; i++){
                buttonEl[i].setAttribute("style", "display: block;");
            }
            h1El.textContent = "Commonly used data types DO NOT include:";
            buttonEl[0].textContent = "1. Strings";
            buttonEl[0].dataset.answer = "wrong";
            buttonEl[1].textContent = "2. Booleans";
            buttonEl[2].textContent = "3. Alerts";
            buttonEl[2].dataset.answer = "right";
            buttonEl[3].textContent = "4. Numbers";
        } else if (currentQuestion === 2){
            h3El.setAttribute("style", "display: block;");
            h1El.textContent = "The condition in an if/else statement is enclosed in ____.";
            buttonEl[0].textContent = "1. Quotes";
            buttonEl[1].textContent = "2. Curly Brackets";
            buttonEl[2].textContent = "3. Parenthesis";
            buttonEl[3].textContent = "4. Square Brackets";
        } else if (currentQuestion === 3){
            h1El.textContent = "Arrays in Javascript can be used to store ____.";
            buttonEl[0].textContent = "1. Numbers and Strings";
            buttonEl[1].textContent = "2. Other Arrays";
            buttonEl[2].textContent = "3. Booleans";
            buttonEl[2].dataset.answer = "wrong";
            buttonEl[3].textContent = "4. All of the Above";
            buttonEl[3].dataset.answer = "right";
        } else if (currentQuestion === 4){
            h1El.textContent = "String values must be enclosed in ____ when being assigned to variables.";
            buttonEl[0].textContent = "1. Commas";
            buttonEl[1].textContent = "2. Curly Brackets";
            buttonEl[2].textContent = "3. Quotes";
            buttonEl[2].dataset.answer = "right";
            buttonEl[3].textContent = "4. Parenthesis";
            buttonEl[3].dataset.answer = "wrong";
        } else if (currentQuestion === 5){
            h1El.textContent = "A very useful tool during development and debugging for printing content to the debugger is:";
            buttonEl[0].textContent = "1. Javascript";
            buttonEl[1].textContent = "2. Terminal/Bash";
            buttonEl[2].textContent = "3. For Loops";
            buttonEl[2].dataset.answer = "wrong";
            buttonEl[3].textContent = "4. Console.log";
            buttonEl[3].dataset.answer = "right";
        } else{
            finalScore = secondsLeft;
            h1El.textContent = "Quiz Complete!";
            for(var i = 0; i<buttonEl.length; i++){
                buttonEl[i].setAttribute("style", "display: none;");
            }
            clearInterval(timerInterval);
            clearTimeout(timeout);
            handleTimeout("You completed the quiz!");
        };
    });
}