const sketchArea = document.querySelector('.sketch');
const inputBox = document.querySelector('input');
const applyButton = document.querySelector('#apply');
const resetButton = document.querySelector('#reset');

//The default size of grid
let root = document.querySelector(':root');

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
    console.log('hmm');
}

function drawGrid(){
    const gridBox = document.querySelectorAll('.box');
    gridBox.forEach((gridDiv) => {
        gridDiv.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "black";
        });
    });
}

function eraseGrid(){
    const gridBox = document.querySelectorAll('.box');
    gridBox.forEach((box) => {
        box.style.backgroundColor = "#355d8a";
    })
}

function removeGrid(){
    let box = sketchArea.firstElementChild;
    while(box){
        box.remove();
        box = sketchArea.firstElementChild;
    }
}

resetButton.addEventListener('click', () => {
    eraseGrid();
});

applyButton.addEventListener('click', () => {
    newGridSize = parseInt(inputBox.value);
    removeGrid();
    if(newGridSize){
        createGrid(newGridSize);
    }
    else{
        createGrid(16);
    }
    drawGrid();
});

createGrid(16);
drawGrid()