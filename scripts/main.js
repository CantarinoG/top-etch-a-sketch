let slider = document.querySelector('#slider');
let sliderValue = slider.value;

let gridInfo = document.querySelector('#grid-info');

let board = document.querySelector('.board');

function createBoard() {
    let boardSize = board.offsetWidth;
    let squareSize = boardSize / sliderValue;
    let boardHtml = "";
    for (let i = 0; i < sliderValue; i++) {
        boardHtml += "<div class='row'>";
        for (let j = 0; j < sliderValue; j++) {
            boardHtml += `<div class='column' style='height:${squareSize}px;'></div>`;
        }
        boardHtml += "</div>";
    }
    board.innerHTML = boardHtml;
}

slider.addEventListener('input', () => {
    sliderValue = slider.value;
    createBoard();
    gridInfo.textContent = `Grid Size: ${sliderValue} x ${sliderValue}`;
});

createBoard();