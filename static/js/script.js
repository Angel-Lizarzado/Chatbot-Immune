document.addEventListener('DOMContentLoaded', () => {
    const chatContainer = document.getElementById('chat-container');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const botSelect = document.getElementById('bot-select');
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');

    let currentBot = 'mistral';

    botSelect.addEventListener('change', (e) => {
        currentBot = e.target.value;
        document.body.setAttribute('data-bot', currentBot);
    });

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        updateThemeIcon();
    });

    function updateThemeIcon() {
        if (document.body.classList.contains('dark-mode')) {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        } else {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    }

    sendBtn.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const message = userInput.value.trim();
        if (message) {
            addMessageToChat('user', message);
            userInput.value = '';
            fetchBotResponse(message);
        }
    }

    function addMessageToChat(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', `${sender}-message`);
        
        const senderLabel = document.createElement('div');
        senderLabel.classList.add('sender-label');
        senderLabel.textContent = sender === 'user' ? 'Tú' : 'Chatbot';
        
        const messageContent = document.createElement('div');
        messageContent.classList.add('message-content');
        
        // Usar innerHTML para que el contenido HTML se interprete correctamente
        messageContent.innerHTML = message; 
        
        messageElement.appendChild(senderLabel);
        messageElement.appendChild(messageContent);
        
        chatContainer.appendChild(messageElement);
        chatContainer.scrollTop = chatContainer.scrollHeight;
        return messageElement;
    }

    async function fetchBotResponse(message) {
        const loadingMessage = addMessageToChat('bot', 'Pensando...');
        try {
            const response = await fetch('/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message, bot: currentBot }),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            if (data.response) {
                await typeWriterEffect(loadingMessage, data.response);
            } else {
                throw new Error('Respuesta vacía del servidor');
            }
        } catch (error) {
            console.error('Error:', error);
            loadingMessage.querySelector('.message-content').textContent = 'Lo siento, ha ocurrido un error. Por favor, intenta de nuevo.';
        }
    }

    async function typeWriterEffect(messageElement, text) {
        const contentElement = messageElement.querySelector('.message-content');
        contentElement.innerHTML = text; // Usar el texto formateado directamente
        chatContainer.scrollTop = chatContainer.scrollHeight; // Desplazar hacia abajo
        let currentText = '';
        let inCodeBlock = false;
        let codeLanguage = '';
        
        const lines = text.split('\n');
        for (let line of lines) {
            if (line.trim().startsWith('```')) {
                if (inCodeBlock) {
                    contentElement.innerHTML += '</code></pre>'; // Cerrar bloque de código
                    inCodeBlock = false;
                } else {
                    // Extraer el lenguaje del bloque de código
                    const languageMatch = line.match(/```(\w+)?/);
                    codeLanguage = languageMatch ? languageMatch[1] || 'plaintext' : 'plaintext';
                    contentElement.innerHTML += `<pre><code class="language-${codeLanguage}">`; // Abrir bloque de código
                    inCodeBlock = true;
                }
            } else if (inCodeBlock) {
                contentElement.querySelector('code').innerHTML += line + '<br>'; // Agregar línea al bloque de código
            } else {
                for (let char of line) {
                    currentText += char;
                    contentElement.innerHTML = currentText; // Mostrar texto normal
                    await new Promise(resolve => setTimeout(resolve, 30));
                }
                contentElement.innerHTML += '<br>'; // Agregar salto de línea
            }
            chatContainer.scrollTop = chatContainer.scrollHeight; // Desplazar hacia abajo
        }
        
        // Aplicar resaltado de sintaxis si está disponible
        if (typeof hljs !== 'undefined') {
            contentElement.querySelectorAll('pre code').forEach((block) => {
                hljs.highlightElement(block); // Resaltar el código
            });
        }
    }

    // Inicializar el icono del tema
    updateThemeIcon();
});