const sketchArea = document.querySelector('.sketch');
const inputBox = document.querySelector('input');
const applyButton = document.querySelector('#apply');
const resetButton = document.querySelector('#reset');
const gridBoxColor = document.body.backgroundColor;

newGridSize = inputBox.value;

function createGrid(size){
    for(let i=0; i<size; i++){
        for(let j=0; j<size; j++){
            const gridDiv = document.createElement('div');
            gridDiv.classList.add('box');
            gridDiv.style.height = "$(size)px";
            gridDiv.style.width = "$(size)px";
            gridDiv.style.border = "2px solid black";
            sketchArea.appendChild(gridDiv);
        }
    }
}

createGrid(16);

function drawGrid(){
    const gridBox = document.querySelectorAll('.box');
    gridBox.forEach((gridDiv) => {
        gridDiv.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "black";
        });
    });
}

drawGrid();

function resetGrid(){
    const gridBox = document.querySelectorAll('.box');
    gridBox.forEach((box) => {
        box.style.backgroundColor = gridBoxColor;
    })
}

resetButton.addEventListener('click', resetGrid());

applyButton.addEventListener('click', () => {
    resetGrid();
    createGrid()
});

