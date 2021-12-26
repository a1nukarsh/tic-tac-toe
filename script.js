// alert("Click Okay to begin")
console.log("This is a tic tac toe game!")
let turn = "X"

// Function to change the turn
const changeTurn = ()=>{
    return turn === "X"?"0":"X"
}

// Function to check if won
const checkWin = ()=>{
    let boxTexts = document.getElementsByClassName('boxText')
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
            document.getElementsByClassName('info')[0].innerText = "Turn for " + turn
        }
    })
})
