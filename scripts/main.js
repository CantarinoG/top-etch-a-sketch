let slider = document.querySelector('#slider');
let sliderValue = slider.value;

let gridInfo = document.querySelector('#grid-info');

let board = document.querySelector('.board');

let btnDraw = document.querySelector('#drawing');
let btnErase = document.querySelector('#erasing');
let btnShade = document.querySelector('#shading');
let btnRainbow = document.querySelector('#rainbow');
let btnClear = document.querySelector('#clear');


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

function deactivateButtons() {
    btnDraw.classList.remove('btn-active');
    btnErase.classList.remove('btn-active');
    btnShade.classList.remove('btn-active');
    btnRainbow.classList.remove('btn-active');
}

btnDraw.addEventListener('click', () => {
    deactivateButtons();
    btnDraw.classList.add('btn-active');
})

btnErase.addEventListener('click', () => {
    deactivateButtons();
    btnErase.classList.add('btn-active');
})

btnShade.addEventListener('click', () => {
    deactivateButtons();
    btnShade.classList.add('btn-active');
})

btnRainbow.addEventListener('click', () => {
    deactivateButtons();
    btnRainbow.classList.add('btn-active');
})

btnClear.addEventListener('click', () => {

})

createBoard();