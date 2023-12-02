function sendMessage() {
    const messageInput = document.getElementById('msg-input');
    const message = messageInput.value.trim();
    if (message !== '') {
      const chatMessages = document.querySelector('.chat-msg');
      const messageElement = document.createElement('div');
      messageElement.classList.add('message');
      messageElement.textContent = message;
      chatMessages.appendChild(messageElement);
      messageInput.value = '';
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  }
  
  document.getElementById('send').addEventListener('click', sendMessage);
  document.getElementById('msg-input').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      sendMessage();
    }
  });