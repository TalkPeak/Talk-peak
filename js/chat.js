const messageContainer = document.querySelector('main');
const userAnswer = document.getElementById('Useranswer');
const submitButton = document.getElementById('Submit');

let messages = [];
let currentMessageIndex = 0;

// Fetch messages from JSON
async function loadMessages() {
    const response = await fetch('/js/text.json');
    const data = await response.json();
    messages = data.messages;

    // 메시지 1과 2를 먼저 표시
    displayMessage(0);
    displayMessage(1);
}

// Display a specific message
function displayMessage(index) {
    const message = messages[index];

    const messageElement = document.createElement('div');
    messageElement.className = 'chat-message A';
    messageElement.innerHTML = `<p>${message.text}</p>`;

    if (message.additional) {
        const additionalElement = document.createElement('p');
        additionalElement.innerText = message.additional;
        messageElement.appendChild(additionalElement);
    }

    messageContainer.appendChild(messageElement);
}

// Handle B submission
submitButton.addEventListener('click', async (e) => {
    e.preventDefault(); // 기본 제출 동작 방지
    const userResponse = userAnswer.value.trim(); // 입력값을 다듬기

    if (userResponse) {
        // B 입력을 화면에 띄움
        const userMessageElement = document.createElement('div');
        userMessageElement.className = 'chat-message B';
        userMessageElement.innerHTML = `<p>${userResponse}</p>`;
        messageContainer.appendChild(userMessageElement);

        // 마지막 A 메시지 출력
        const lastMessageIndex = messages.length - 1; // 마지막 A 메시지 인덱스
        const lastMessage = messages[lastMessageIndex];

        const lastMessageElement = document.createElement('div');
        lastMessageElement.className = 'chat-message A';
        lastMessageElement.innerHTML = `<p>${lastMessage.text}</p>`;

        if (lastMessage.additional) {
            const additionalElement = document.createElement('p');
            additionalElement.innerText = lastMessage.additional;
            lastMessageElement.appendChild(additionalElement);
        }

        messageContainer.appendChild(lastMessageElement);

        // Save data to the NestJS server after all messages
        await saveData(userResponse);

        // B 입력 후 입력 필드를 초기화
        userAnswer.value = '';
    }
});

// Function to save data to the NestJS server
async function saveData(userResponse) {
    const response = await fetch('/talks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userResponse }),
    });

    if (response.ok) {
        console.log('Data saved successfully!');
    } else {
        console.error('Error saving data');
    }
}

// Initialize messages
loadMessages();
