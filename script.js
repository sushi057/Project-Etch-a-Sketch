const sketchArea = document.querySelector('.sketch');
const inputSize = document.querySelector('input');

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

function resetGrid(){

}

function newGrid(gridSize){

}

function drawGrid(){

}