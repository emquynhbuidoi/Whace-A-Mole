const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPostition
let congThoiGian
let currentTime = 10
let timeId = null


function randomSquare(){
    squares.forEach(square =>{
        square.classList.remove('mole')
        square.classList.remove('cong')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')
    hitPostition = randomSquare.id

    if(currentTime < 4){
    let themthoigian = squares[Math.floor(Math.random() * 9)]
    themthoigian.classList.add('cong')
    congThoiGian = themthoigian.id
    }
}

squares.forEach(square =>{
    square.addEventListener('mousedown',() => {
        if(square.id == congThoiGian){
            currentTime+=2
            congThoiGian = null
        }
        if(square.id == hitPostition){
            result++
            score.textContent = result
            hitPostition = null
        }
        else{
            currentTime--;
            hitPostition = null
        }
    })
})

function moveMole(){
    timeId = setInterval(randomSquare, 1000)
}
moveMole()

function countDown(){
    currentTime--
    timeLeft.textContent = currentTime

    if(currentTime <= 0){
        clearInterval(countDownTimerId)
        clearInterval(timeId)
        alert('Time out! Your final score is '+ result)
    }
}
let countDownTimerId = setInterval(countDown, 1000)






