const sketchArea = document.querySelector('.sketch');

function createGrid(size){
    for(let i=0; i<size; i++){
        for(let j=0; j<size; j++){
            const gridDiv = document.createElement('div');
            gridDiv.classList.add('box');
            gridDiv.style.height = "$(size)px";
            gridDiv.style.width = "$(size)px";
            gridDiv.textContent = "#";
            sketchArea.appendChild(gridDiv);
        }
    }
}

createGrid(16);