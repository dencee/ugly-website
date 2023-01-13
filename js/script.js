let savedValue = localStorage.getItem('gameCounter');
let gameCounter = 0;
if (savedValue !== undefined) {
    gameCounter = Number(savedValue);
}

document.addEventListener('DOMContentLoaded', () => {
    const bodyEl = document.querySelector('body');

    bodyEl.addEventListener('click', () => {
        gameCounter++;

        const counterEl = document.querySelector('#page-counter p');
        counterEl.innerText = gameCounter;

        randomizeTableElements();

    });

    initTable();
});

function randomizeTableElements(){
    const tableDataElements = document.querySelectorAll('tbody td');

    console.log(tableDataElements)

    for(let i = 0; i < tableDataElements.length; i++){
        tableDataElements[i].style.backgroundColor = '#' + getRandomColor();
    }

}

function initTable(){
    const tbodyEl = document.querySelector('tbody');

    for(let i = 0; i < 100; i++){

        const tableRowEl = document.createElement('tr');
        tableRowEl.style.backgroundColor = getRandomColor();
        const cols = getRandomInt(6) + 1;

        for(let k = 0; k < cols; k++){
            const tableDataEl = document.createElement('td');
            tableDataEl.style.backgroundColor = '#' + getRandomColor();
            tableDataEl.style.borderWidth = 5;
            tableDataEl.style.borderStyle = 'solid';
            tableDataEl.style.fontSize = getRandomInt(50) + 'px';
            tableDataEl.innerText = randomLetters();
            tableRowEl.appendChild(tableDataEl);
        }

        tbodyEl.insertAdjacentElement('beforeend', tableRowEl);
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomColor(){
    return Math.floor(Math.random()*16777215).toString(16);
}

function randomLetters() {
    const length = getRandomInt(50);
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for ( let i = 0; i < characters.length; i++ ) {
        if(i % 4 == 0){
            result += '🍊';
        } else {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
    }
    return result;
}