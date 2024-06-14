let activeElement = null;
let offsetX = 0;
let offsetY = 0;

document.addEventListener('mousedown', (e) => {
    if (e.target.classList.contains('icon')) {
        activeElement = e.target;
        const rect = activeElement.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
        activeElement.classList.add('dragging'); // Add dragging class
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
        activeElement.classList.remove('dragging'); // Remove dragging class
        document.removeEventListener('mousemove', dragElement);
        document.removeEventListener('mouseup', dropElement);
        activeElement = null;
    }
}