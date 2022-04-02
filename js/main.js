document.querySelector('#colorChange').addEventListener('click', newRound)
let scoreHere = document.querySelector('.scoreHere')
let answer1 = document.querySelector('#answer1')
let answer2 = document.querySelector('#answer2')
let answer3 = document.querySelector('#answer3')
let answer4 = document.querySelector('#answer4')
let correctColor
let score = 0
let num
const answers = document.querySelectorAll('.answer')

Array.from(answers).forEach(element => element.addEventListener('click', checkScore))

scoreHere.innerText = score
//function to start a new round, this function contains all of the other functions that do other things
function newRound(){
    correctColor = randomRGB()
    num = random(0,3)
    answerPick()
    changeBackground()
    addClassToCorrect()
    document.querySelector('#colorChange').innerText ='Skip this one'
}
//change all of the answer choices
function answerPick(){
    if(num === 0){
        answer1.innerText = correctColor
        answer2.innerText = randomRGB()
        answer3.innerText = randomRGB()
        answer4.innerText = randomRGB()
    }else if(num === 1){
        answer2.innerText = correctColor
        answer1.innerText = randomRGB()
        answer3.innerText = randomRGB()
        answer4.innerText = randomRGB()
    }else if(num === 3){
        answer3.innerText = correctColor
        answer2.innerText = randomRGB()
        answer1.innerText = randomRGB()
        answer4.innerText = randomRGB()
    }else{
        answer4.innerText = correctColor
        answer2.innerText = randomRGB()
        answer3.innerText = randomRGB()
        answer1.innerText = randomRGB()
    }
}

//add class to correct option 
function addClassToCorrect(){
    if(num === 0){
        answer1.classList.add('winner')
        answer2.classList.remove('winner')
        answer3.classList.remove('winner')
        answer4.classList.remove('winner')
    }else if(num === 1){
        answer2.classList.add('winner')
        answer1.classList.remove('winner')
        answer3.classList.remove('winner')
        answer4.classList.remove('winner')
    }else if(num === 3){
        answer3.classList.add('winner')
        answer2.classList.remove('winner')
        answer1.classList.remove('winner')
        answer4.classList.remove('winner')
    }else{
        answer4.classList.add('winner')
        answer2.classList.remove('winner')
        answer3.classList.remove('winner')
        answer1.classList.remove('winner')
    }
}

//increment the score if correct one is picked
function checkScore(click){
    if(click.target.classList.contains('winner')){
        score ++
		scoreHere.innerText = score
        newRound()
	}else{
		newRound()
        score --
        scoreHere.innerText = score
	}
}
//change the background color
function changeBackground(){
    document.querySelector('#colorArea').style.background = correctColor
}

//random number between two values
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
//random color in rbg format
  function randomRGB() {
    return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
  }
