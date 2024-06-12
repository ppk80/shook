// Array of texts to cycle through
const atexts = ['I felt', 'I was perceived by', 'unearthed by memory'];
const btexts = ['from here', 'from then', 'from video'];
const ctexts = ['the wave', 'the national specter', 'my ancestors\' futures'];
let currentIndex = 0;

// Function to cycle through texts
function cycleText() {
    const textDisplay = document.getElementById('text-display');
    currentIndex = (currentIndex + 1) % atexts.length;
    textDisplay.textContent = atexts[currentIndex];
}


// Function to cycle through texts
function cycleText2(){
    const textDisplay = document.getElementById('text-display2');
    currentIndex = (currentIndex + 1) % btexts.length;
    textDisplay.textContent = btexts[currentIndex];
}


// Function to cycle through texts
function cycleText3() {
    const textDisplay = document.getElementById('text-display3');
    currentIndex = (currentIndex + 1) % ctexts.length;
    textDisplay.textContent = ctexts[currentIndex];
}

// Add click event listener to the cycle button
document.getElementById('cycle-button').addEventListener('click', cycleText);
document.getElementById('cycle-button2').addEventListener('click', cycleText2);
document.getElementById('cycle-button3').addEventListener('click', cycleText3);

// Get all draggable words
const draggableWords = document.querySelectorAll('.draggable-word');

// Add event listeners for drag and drop
draggableWords.forEach(word => {
    word.addEventListener('dragstart', dragStart);
    word.addEventListener('dragend', dragEnd);
});

// Function to handle drag start event
function dragStart(event) {
    // Set the drag data to be the word's text content
    event.dataTransfer.setData('text/plain', event.target.textContent);
    // Add a class to apply styles when dragging
    event.target.classList.add('dragging');
}

// Function to handle drag end event
function dragEnd(event) {
    // Remove the class added during dragging
    event.target.classList.remove('dragging');
}

// Add event listener for dragover event on word container
document.getElementById('word-container').addEventListener('dragover', dragOver);

// Function to handle drag over event
function dragOver(event) {
    // Prevent default to allow drop
    event.preventDefault();
    // Get the mouse position
    const x = event.clientX;
    const y = event.clientY;
    // Update the position of the dragged word
    const draggedWord = document.querySelector('.dragging');
    draggedWord.style.left = (x - draggedWord.offsetWidth / 2) + 'px';
    draggedWord.style.top = (y - draggedWord.offsetHeight / 2) + 'px';
}


