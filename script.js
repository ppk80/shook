function openWindow(id, x = null, y = null) {
    var window = document.getElementById(id);
    var viewportWidth = window.innerWidth;
    var viewportHeight = window.innerHeight;
    var windowWidth = window.offsetWidth;
    var windowHeight = window.offsetHeight;
    
    // If x or y is not provided, calculate center position
    if (x === null) {
        x = (viewportWidth - windowWidth) / 2;
    }
    if (y === null) {
        y = (viewportHeight - windowHeight) / 2;
    }

    window.style.display = 'flex';
    window.style.left = x + 'px';
    window.style.top = y + 'px';
    addToTaskbar(id);
}

function closeWindow(id) {
    var window = document.getElementById(id);
    window.style.display = 'none';
    removeFromTaskbar(id);
}

function addToTaskbar(id) {
    var taskbarIcons = document.getElementById('taskbar-icons');
    if (!document.getElementById('task-' + id)) {
        var taskIcon = document.createElement('div');
        taskIcon.id = 'task-' + id;
        taskIcon.className = 'task-icon';
        taskIcon.innerText = id;
        taskIcon.onclick = function() {
            var window = document.getElementById(id);
            window.style.display = window.style.display === 'none' ? 'flex' : 'none';
        };
        taskbarIcons.appendChild(taskIcon);
    }
}

function removeFromTaskbar(id) {
    var taskIcon = document.getElementById('task-' + id);
    if (taskIcon) {
        taskIcon.remove();
    }
}

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
