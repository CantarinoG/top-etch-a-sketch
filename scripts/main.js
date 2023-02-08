let slider = document.querySelector('#slider');
let sliderValue = slider.value;

let colorPicker = document.querySelector('#color-picker');

let gridInfo = document.querySelector('#grid-info');

let board = document.querySelector('.board');

let btnDraw = document.querySelector('#drawing');
let btnErase = document.querySelector('#erasing');
let btnShade = document.querySelector('#shading');
let btnRainbow = document.querySelector('#rainbow');
let btnClear = document.querySelector('#clear');

let mouseDown;

let squares;

document.addEventListener('mousedown', function() {
    mouseDown = true;
});

document.addEventListener('mouseup', function() {
    mouseDown = false;
});


function addSquaresListeners() {
    squares.forEach(square => {
        square.addEventListener('mouseenter', () => {
            if (mouseDown) {
                if (btnDraw.classList.contains('btn-active')) {
                    square.style.backgroundColor = colorPicker.value;
                    square.style.filter = 'brightness(1.001)';
                } else if (btnErase.classList.contains('btn-active')) {
                    square.style.backgroundColor = 'rgb(255, 255, 255)';
                    square.style.filter = 'brightness(1.001)';
                } else if (btnShade.classList.contains('btn-active')) {
                    let brightness = square.style.filter;
                    let brightnessValue = +brightness.slice(11, 14) - 0.1;
                    square.style.filter = `brightness(${brightnessValue})`;
                } else if (btnRainbow.classList.contains('btn-active')) {
                    square.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
                    square.style.filter = 'brightness(1.001)';
                }
            }
        });

        square.addEventListener('click', () => {
            if (btnDraw.classList.contains('btn-active')) {
                square.style.backgroundColor = colorPicker.value;
                square.style.filter = 'brightness(1.001)';
            } else if (btnErase.classList.contains('btn-active')) {
                square.style.backgroundColor = 'rgb(255, 255, 255)';
                square.style.filter = 'brightness(1.001)';
            } else if (btnShade.classList.contains('btn-active')) {
                let brightness = square.style.filter;
                let brightnessValue = +brightness.slice(11, 14) - 0.1;
                square.style.filter = `brightness(${brightnessValue})`;
            } else if (btnRainbow.classList.contains('btn-active')) {
                square.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
                square.style.filter = 'brightness(1.001)';
            }
        });

    });
}

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
    squares = document.querySelectorAll('.column');
    addSquaresListeners();
    clearBoard();
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

btnClear.addEventListener('click', clearBoard);

function clearBoard() {
    squares.forEach(square => {
        square.style.backgroundColor = 'rgb(255, 255, 255)';
        square.style.filter = 'brightness(1.001)';
        /*It needs to be 1.001 instead of 1.0, because when we get the filter it would return 'brightness(1)', 
        and we need at least three chars to slice the value out of the string so we can update the brightness with
        the shading mode. Not the best solution, I know...*/
    })
}

createBoard();