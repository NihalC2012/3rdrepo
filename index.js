let randomnumber = Math.floor(Math.random()*100)+1
let guesscount = 1

const Guesses = document.getElementById("Guesses")

const LastResult = document.getElementById("LastResult")

const loworhigh = document.getElementById("loworhigh")

const SubmitGuess = document.getElementById("SubmitGuess")

const GuessField = document.getElementById("GuessField")

const resetbutton = document.getElementById("resetbutton")

resetbutton.style.display="none"
GuessField.focus()
function ResetGame () {
  GuessField.disabled= true
  SubmitGuess.disabled= true
  resetbutton.style.display="inline"
  resetbutton.addEventListener("click", () =>{
  guesscount=1
  let resultParas = document.querySelectorAll(".result p")
  for(let i=0; i< resetParas.length;i++){
    resultParas[i].textContent=""
    
  }
  resetbutton.style.display="none"
  GuessField.disabled=false
  SubmitGuess.disabled= false
  GuessField.value=""
  GuessField.focus()
  randomnumber = Math.floor(Math.random()*100)+1
  })
}

SubmitGuess.addEventListener("click", () => {
   let userguess=Number(GuessField.value)
  
   if(guesscount === 1){
    Guesses.textContent = "previous guesses: "
    Guesses.textContent += userguess
   } else {
    Guesses.textContent +=","+ userguess
   }
   if(userguess === randomnumber){
    LastResult.textContent = "Good Job You Guessed Correctly!"
    loworhigh.textContent = ""
    ResetGame ()
   } else if (guesscount === 10){
    LastResult.textContent="You Lost"
     loworhigh.textContent = ""
     ResetGame ()
   }else{
    LastResult.textContent="Wrong! Try Again"
    if (userguess < randomnumber) {
        loworhigh.textContent="Lower than the number"
    } else{
        loworhigh.textContent="Higher than the number"
    }
   }
   guesscount++
})

