// Make windows draggable
var dragItem = null;
var offsetX, offsetY;

document.addEventListener('mousedown', function(e) {
    if (e.target.closest('.title-bar')) {
        dragItem = e.target.closest('.window');
        offsetX = e.clientX - dragItem.getBoundingClientRect().left;
        offsetY = e.clientY - dragItem.getBoundingClientRect().top;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    }
});

function onMouseMove(e) {
    if (dragItem) {
        dragItem.style.left = (e.clientX - offsetX) + 'px';
        dragItem.style.top = (e.clientY - offsetY) + 'px';
    }
}

function onMouseUp() {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
    dragItem = null;
}

// Function to position windows with respect to the center of the screen
function positionWindow(windowId, x, y) {
    const windowElement = document.getElementById(windowId);
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const windowWidth = windowElement.offsetWidth;
    const windowHeight = windowElement.offsetHeight;

    // Calculate the center position and apply offsets treating the center as origin
    const centerX = (screenWidth / 2) + x - (windowWidth / 2);
    const centerY = (screenHeight / 2) - y - (windowHeight / 2);

    windowElement.style.left = `${centerX}px`;
    windowElement.style.top = `${centerY}px`;
}

// Smooth scroll adjustment (for slower scrolling)
document.querySelectorAll('.window-content').forEach(content => {
    content.addEventListener('wheel', (e) => {
        e.preventDefault();
        content.scrollBy({
            top: e.deltaY * 0.5, // Adjust scroll speed (smaller factor = slower scrolling)
            behavior: 'smooth'
        });
    });
});