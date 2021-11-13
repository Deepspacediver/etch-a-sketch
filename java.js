const container = document.getElementById('etch-container');

function createGrid(rows, columns){
    for (let i =0; i<(rows * columns); i++){
        const divs = document.createElement('div');
        divs.className = 'box';
        container.appendChild(divs);
    }
}

createGrid(16, 16);