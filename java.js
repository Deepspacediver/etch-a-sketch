const container = document.getElementById('etch-container');

function createGrid(rows, columns){
    for (let i =0; i<(rows * columns); i++){
        const divs = document.createElement('div');
        divs.className = 'box';
        container.appendChild(divs);
    }
}

createGrid(16, 16);

// Array.from(container).forEach(div => div.addEventListener('mouseenter', (e)=> {
    //      e.target.style.backgroundColor = 'purple';
    //  }))

container.addEventListener('mouseover', e => {
    e.target.style.backgroundColor = 'purple';
})