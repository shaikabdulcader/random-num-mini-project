//select input box,para
let guessNumber = document.getElementById("guessNumber")
let result = document.getElementById("result")
let randomNumber = Math.floor(Math.random()*10)+1
let score = document.getElementById("score")
let totalScore = 10
function check()
{
    let enterNumber = guessNumber.value
    if(randomNumber==enterNumber)
    {
        console.log("Right")
        result.textContent="Right😏"
        alert("You Won The Game!! 😎")
        totalScore= totalScore+1
        score.textContent="score: "+ totalScore
    }
    else{
        totalScore= totalScore-1
        score.textContent="score: "+ totalScore
        console.log("Wrong")
        result.textContent="Wrong🤯"
    }
}
