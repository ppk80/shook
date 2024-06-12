// Array of texts to cycle through
const texts = ['I cried', 'I was born', 'I was sick', 'I saw ash', 'I recovered', 'I couldn\'t recall it', 'I dreamt of ghosts', 'I shook', 'I was a hotel', 'I was a moving picture', 'I did not ask for it'];
const texts2 = ['I was born', 'I was sick', 'I saw ash', 'I recovered', 'I couldn\'t recall it', 'I dreamt of ghosts', 'I shook', 'I was a hotel', 'I was a moving picture', 'I did not ask for it', 'I cried'];
let index = 0;

// Function to change the text of the div periodically
function changeTextPeriodically() {
    const textDiv = document.getElementById('text-changing-div');
	const textDiv2 = document.getElementById('text-changing-div2');
    textDiv.innerText = texts[index];
	textDiv2.innerText = texts2[index];
    index = (index + 1) % texts.length;
}

// Change the text every 3 seconds (3000 milliseconds)
setInterval(changeTextPeriodically, 3000);
