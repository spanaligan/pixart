// grab the set color button
const colorButton = document.querySelector('#set-color');
// look at user input
let colorChoice = document.querySelector('.input');
colorButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (evt.target) {
        if (colorChoice.value === '1') {
            document.getElementById('brush').setAttribute('style', 'background: rgba(255, 0, 8, 0.82)');
        } else if (colorChoice.value === '2') {
            document.getElementById('brush').setAttribute('style', 'background: #ff9200');
        } else if (colorChoice.value === '3') {
            document.getElementById('brush').setAttribute('style', 'background: rgba(255, 254, 21, 0.75)');
        } else if (colorChoice.value === '4') {
            document.getElementById('brush').setAttribute('style', 'background: rgba(31, 100, 45, 0.88)');
        } else if (colorChoice.value === '5') {
            document.getElementById('brush').setAttribute('style', 'background: #5B87BF');
        } else if (colorChoice.value === '6') {
            document.getElementById('brush').setAttribute('style', 'background: rgba(37, 29, 112, 0.93)');
        } else if (colorChoice.value === '7') {
            document.getElementById('brush').setAttribute('style', 'background: rgba(99, 31, 153, 0.93)');
        }   else if (colorChoice.value === '8') {
            document.getElementById('brush').setAttribute('style', 'background: black');
        } else if (colorChoice.value === '9')
            document.getElementById('brush').setAttribute('style', 'background: white');
        else {
            alert('Please type one of the provided color choices.');
        }
    }
});
// create 20 divs of the square class
const canvas = document.querySelector("body");
// changed the selector to body and removed the section with the class after re-reading the directions

function makeBoxes(container) {
    for (let i = 1; i <= 8000; i++) {
        let box = document.createElement("div");
        box.className = "square";
        canvas.appendChild(box);
    }
}
makeBoxes(canvas);
// add event listener to change color upon clicking the new boxes.
//let paint = document.querySelector('div');
canvas.addEventListener('mouseover', function(e) {
    if (e.target.className === 'square' && colorChoice.value === '1') {
        e.target.classList.add('red');
    } else if (e.target.className === 'square' && colorChoice.value === '2') {
        e.target.classList.add('orange');
    } else if (e.target.className === 'square' && colorChoice.value === '3') {
        e.target.classList.add('yellow');
    } else if (e.target.className === 'square' && colorChoice.value === '4') {
        e.target.classList.add('green');
    } else if (e.target.className === 'square' && colorChoice.value === '5') {
        e.target.classList.add('blue');
    } else if (e.target.className === 'square' && colorChoice.value === '6') {
        e.target.classList.add('indigo');
    } else if (e.target.className === 'square' && colorChoice.value === '7') {
        e.target.classList.add('violet');
    } else if (e.target.className === 'square' && colorChoice.value === '8') {
        e.target.classList.add('black');
    } else if (e.target.className === 'square' && colorChoice.value === '9') {
        e.target.classList.add('white');
    }
});

