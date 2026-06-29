
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');

chatInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const newLi = document.createElement('li');
        newLi.textContent = chatInput.value;
        chatMessages.appendChild(newLi);
        chatInput.value = '';
    }
});

const alertBtn = document.getElementById('alert-btn');
const alertMsg = document.getElementById('alert-msg');

alertBtn.addEventListener('click', function() {
    alertMsg.style.display = 'block';
    setTimeout(function() {
        alertMsg.style.display = 'none';
    }, 3000);
});

const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const counterDisplay = document.getElementById('counter-display');
let count = 0;
let timerId;
startBtn.addEventListener('click', function() {
    clearInterval(timerId); 
    
    timerId = setInterval(function() {
        count++;
        // Update counter-display
        counterDisplay.textContent = count;
    }, 1000);
});

stopBtn.addEventListener('click', function() {
    clearInterval(timerId);
});

const nameInput = document.getElementById('name-input');
const saveBtn = document.getElementById('save-btn');
const greetingName = document.getElementById('greeting-name');
const savedName = localStorage.getItem('savedName');
if (savedName) {
    greetingName.textContent = savedName;
}

saveBtn.addEventListener('click', function() {
    const value = nameInput.value;
    localStorage.setItem('savedName', value);
    greetingName.textContent = value;
});