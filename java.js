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
    e.target.classList.add('new-background');
})

const button = document.getElementById('reset-btn');


 button.addEventListener('click', ()=>{
     const divs = document.querySelectorAll('.new-background');
     divs.forEach(el => el.classList.toggle('new-background'));
     newGrid()
})

let userGrid;

function newGrid(rows, columns){
    const divs = document.getElementsByClassName('box') 
    while(divs[0]){
         divs[0].parentNode.removeChild(divs[0]);
     }
   let userChoice = prompt('Please input a number of squares per side for the new grid');
   createGrid(userChoice, userChoice)
    
}