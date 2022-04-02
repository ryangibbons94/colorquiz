document.querySelector('#colorChange').addEventListener('click', changeBackground)

let answer1 = document.querySelector('#answer1')
let answer2 = document.querySelector('#answer2')
let answer3 = document.querySelector('#answer3')
let answer4 = document.querySelector('#answer4')
var correctColor

//change all of the answer choices
function answerPick(){
    let num = random(0,3)
    if(num === 0){
        answer1.innerText = 'winner'
        answer2.innerText = randomRGB()
        answer3.innerText = randomRGB()
        answer4.innerText = randomRGB()
    }else if(num === 1){
        answer2.innerText = 'winner'
        answer1.innerText = randomRGB()
        answer3.innerText = randomRGB()
        answer4.innerText = randomRGB()
    }else if(num === 3){
        answer3.innerText = 'winner'
        answer2.innerText = randomRGB()
        answer1.innerText = randomRGB()
        answer4.innerText = randomRGB()
    }else{
        answer4.innerText = 'winner'
        answer2.innerText = randomRGB()
        answer3.innerText = randomRGB()
        answer1.innerText = randomRGB()
    }
}


function changeBackground(){
    correctColor = randomRGB()
    document.querySelector('#colorArea').style.background = correctColor
    answerPick().innerText = correctColor
}


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function randomRGB() {
    return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
  }

  //