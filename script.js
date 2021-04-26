const grid = document.querySelector('#grid-container');
const reset = document.querySelector('#reset');

window.addEventListener('load', createGrid);

function createGrid() {
    gridSize(16);
    fullGrid(16);
}

function gridSize(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function fullGrid(size) {
    for (i = 0; i < size * size; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('gridSquare');
        gridSquare.addEventListener('mouseover', goBlack);
        gridSquare.addEventListener('click', erase);
        grid.appendChild(gridSquare);
    }
}

function goBlack(e) {
    e.target.style.backgroundColor = "black";
}

function erase(e) {
    e.target.style.backgroundColor = "white";
}

document.getElementById('reset').addEventListener('click', enterSquares)

function enterSquares() {
    let sizeNumber = prompt('Enter a number from 1-100');
    if(sizeNumber != null){
     sizeNumber = parseInt(sizeNumber);
     if(sizeNumber < 1 || sizeNumber > 100 || Number.isNaN(sizeNumber)){
        prompt('Enter a number from 1-100');
        enterSquares();
      } else {
        clear();
        gridSize(sizeNumber);
        fullGrid(sizeNumber);
      }
    }
  }

function clear() {
    const gridArray = Array.from(grid.childNodes);
    gridArray.forEach((element) => {
        grid.removeChild(element);
    });
}

