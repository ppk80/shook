// script.js

let activeElement = null;
let offsetX = 0;
let offsetY = 0;

document.addEventListener('mousedown', (e) => {
    if (e.target.classList.contains('icon')) {
        activeElement = e.target;
        offsetX = e.clientX - activeElement.getBoundingClientRect().left;
        offsetY = e.clientY - activeElement.getBoundingClientRect().top;
        document.addEventListener('mousemove', dragElement);
        document.addEventListener('mouseup', dropElement);
    }
});

function dragElement(e) {
    if (activeElement) {
        e.preventDefault();
        activeElement.style.top = (e.clientY - offsetY) + 'px';
        activeElement.style.left = (e.clientX - offsetX) + 'px';
    }
}

function dropElement() {
    if (activeElement) {
        document.removeEventListener('mousemove', dragElement);
        document.removeEventListener('mouseup', dropElement);
        activeElement = null;
    }
}

function getCoordinates() {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    let output = '';

    const icons = document.querySelectorAll('.icon');
    icons.forEach(icon => {
        const rect = icon.getBoundingClientRect();
        const x = rect.left + rect.width / 2 - centerX;
        const y = rect.top + rect.height / 2 - centerY;
        output += `${icon.id}: (${x.toFixed(2)}, ${-y.toFixed(2)})<br>`;
    });

    document.getElementById('output').innerHTML = output;
}
