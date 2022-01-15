const board = document.querySelector('.board')
const SQUARES_NUMBER = 500

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    board.appendChild(square)
}

const squares = board.querySelectorAll('.square')

for (item of squares) {
    item.addEventListener('mouseover', itemHover)
    item.addEventListener('mouseleave', itemLeave)
}

function itemHover(event) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    event.target.style.boxShadow = `0 0 2px 0 rgb(${r}, ${g}, ${b}), 0 0 4px rgb(${r}, ${g}, ${b})`
}

function itemLeave(event) {
    event.target.style.backgroundColor = '#333'
    event.target.style.boxShadow = '0 0 2px #000'
}