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
    messageElement.innerHTML = `
    <div class = "profile-container"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" fill="#FAD9DA"/>
        <path d="M22.2313 17.6641L25.7583 26.2322C26.1182 27.1217 25.8919 28.134 25.1722 28.7781L21.6452 31.9477C20.7815 32.7247 19.455 32.7247 18.5913 31.9477L15.0644 28.7781C14.3549 28.134 14.1184 27.1217 14.4783 26.2322L18.0052 17.6641C18.7764 15.7828 21.4499 15.7828 22.2313 17.6641Z" fill="#F7C7C8"/>
        <path d="M20.9768 19.2182L25.131 13.6254C25.7274 12.8279 25.1515 11.693 24.1439 11.693H15.8458C14.8484 11.693 14.2726 12.8279 14.8587 13.6254L19.0128 19.2182C19.4961 19.8726 20.4935 19.8726 20.9768 19.2182Z" fill="#F5B7BA"/>
        <path d="M33.7992 7C33.7992 7 30.6425 8.43142 26.7454 9.24938C23.8765 9.8424 21.2133 9.97532 20 10.006C18.7867 9.97532 16.1235 9.8424 13.2546 9.24938C9.35752 8.44165 6.20077 7 6.20077 7C5.25477 10.5377 7.74316 14.0855 11.7431 14.9137C15.1055 15.609 18.4473 14.1571 20 11.5806C21.5527 14.1571 24.8945 15.609 28.2569 14.9137C32.2568 14.0855 34.7452 10.5377 33.7992 7Z" fill="white"/>
        <path d="M24.8931 24.058L21.3761 26.6372C21.2298 26.7445 21.1987 26.9493 21.3066 27.0947L21.4714 27.3169C21.5792 27.4623 21.7852 27.4933 21.9315 27.386L25.4485 24.8068C25.5947 24.6995 25.6259 24.4947 25.518 24.3493L25.3532 24.1271C25.2453 23.9817 25.0393 23.9507 24.8931 24.058Z" fill="white"/>
        </svg>
        <p>뱁사원</p>
        </div><p>${message.text}</p>`;

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
        lastMessageElement.innerHTML = `
        <div class = "profile-container"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" fill="#FAD9DA"/>
        <path d="M22.2313 17.6641L25.7583 26.2322C26.1182 27.1217 25.8919 28.134 25.1722 28.7781L21.6452 31.9477C20.7815 32.7247 19.455 32.7247 18.5913 31.9477L15.0644 28.7781C14.3549 28.134 14.1184 27.1217 14.4783 26.2322L18.0052 17.6641C18.7764 15.7828 21.4499 15.7828 22.2313 17.6641Z" fill="#F7C7C8"/>
        <path d="M20.9768 19.2182L25.131 13.6254C25.7274 12.8279 25.1515 11.693 24.1439 11.693H15.8458C14.8484 11.693 14.2726 12.8279 14.8587 13.6254L19.0128 19.2182C19.4961 19.8726 20.4935 19.8726 20.9768 19.2182Z" fill="#F5B7BA"/>
        <path d="M33.7992 7C33.7992 7 30.6425 8.43142 26.7454 9.24938C23.8765 9.8424 21.2133 9.97532 20 10.006C18.7867 9.97532 16.1235 9.8424 13.2546 9.24938C9.35752 8.44165 6.20077 7 6.20077 7C5.25477 10.5377 7.74316 14.0855 11.7431 14.9137C15.1055 15.609 18.4473 14.1571 20 11.5806C21.5527 14.1571 24.8945 15.609 28.2569 14.9137C32.2568 14.0855 34.7452 10.5377 33.7992 7Z" fill="white"/>
        <path d="M24.8931 24.058L21.3761 26.6372C21.2298 26.7445 21.1987 26.9493 21.3066 27.0947L21.4714 27.3169C21.5792 27.4623 21.7852 27.4933 21.9315 27.386L25.4485 24.8068C25.5947 24.6995 25.6259 24.4947 25.518 24.3493L25.3532 24.1271C25.2453 23.9817 25.0393 23.9507 24.8931 24.058Z" fill="white"/>
        </svg>
        <p>뱁사원</p>
        </div>
        <p>${lastMessage.text}</p>`;

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
