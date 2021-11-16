const container = document.getElementById('etch-container');


function createGrid(rows, columns){
    for (let i =0; i<(rows * columns); i++){
        const divs = document.createElement('div');
        divs.className = 'box';
        container.appendChild(divs);
    }
}

createGrid(16, 16);


container.addEventListener('mouseover', e => {
    e.target.classList.add('new-background');
})

const button = document.getElementById('reset-btn');
 button.addEventListener('click', ()=>{
     const divs = document.querySelectorAll('.new-background');
     divs.forEach(el => el.classList.toggle('new-background'));
     newGrid()
})


function newGrid(){
    const divs = document.getElementsByClassName('box') 
    while(divs[0]){
         divs[0].parentNode.removeChild(divs[0]);
      }
    let userChoice = prompt('Please input a number of squares per side for the new grid');
    createGrid(userChoice, userChoice);
    for(let i = 0; i<divs.length; i++){
       let sizeOfContainer =  (480 / userChoice);  
       divs[i].style.width = sizeOfContainer + 'px';
       divs[i].style.height = sizeOfContainer + 'px';
    }    
}