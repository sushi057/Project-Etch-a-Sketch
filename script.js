function genDivs(n){
    let el = document.querySelector('.container');

    for(let i = 0; i < n; i++){
        let rowEl = document.createElement('div');
        rowEl.className = 'grid-row';
        for(let j = 0; j < n; j++){
            let colEl = document.createElement('div');
            colEl.className = 'grid-col';
            colEl.textContent = '#';
            rowEl.appendChild(colEl);
        }
        el.appendChild(rowEl);
    }
}

genDivs(5);

