// alert("Click Okay to begin")
console.log("This is a tic tac toe game!")
let turn = "X"
let gameOver = false

// Function to change the turn
const changeTurn = ()=>{
    return turn === "X"?"0":"X"
}

// Function to check if won
const checkWin = ()=>{
    let boxText = document.getElementsByClassName('boxText')
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 5, 7],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e =>{
        if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== ""))
        {
            document.querySelector('.info').innerText = boxText[e[0]].innerText + " Won"
            gameOver = true
        }
    })

}

// Game Logic
let boxes  = document.getElementsByClassName('box')
Array.from(boxes).forEach(element =>{
    let boxText = element.querySelector('.boxText')
    element.addEventListener('click', ()=>{
        if (boxText.innerText === ''){
            boxText.innerText = turn;
            turn = changeTurn()
            checkWin()
            if(!gameOver){
                document.getElementsByClassName('info')[0].innerText = "Turn for " + turn

            }
        }
    })
})
