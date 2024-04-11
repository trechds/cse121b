document.addEventListener("DOMContentLoaded", () => {
    const chatMessages = document.getElementById("chat-messages");
    const chatForm = document.getElementById("chat-form");
    const messageInput = document.getElementById("message-input");

    // Função para exibir mensagem no chat
    function displayMessage(message) {
        const div = document.createElement("div");
        div.classList.add("message");
        div.textContent = message;
        chatMessages.appendChild(div);
        // Scroll automaticamente para a última mensagem
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Função para carregar mensagens do servidor
    async function loadMessages() {
        try {
            const response = await fetch("https://api.example.com/messages");
            if (!response.ok) {
                throw new Error("Failed to fetch messages");
            }
            const data = await response.json();
            data.messages.forEach((message) => {
                displayMessage(message.text);
            });
        } catch (error) {
            console.error("Error loading messages:", error.message);
        }
    }

    // Carregar mensagens existentes ao iniciar
    loadMessages();

    // Evento de envio do formulário
    chatForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const messageText = messageInput.value.trim();
        if (messageText === "") return;

        try {
            const response = await fetch("https://api.example.com/messages", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ text: messageText })
            });
            if (!response.ok) {
                throw new Error("Failed to send message");
            }
            displayMessage(messageText);
            messageInput.value = ""; // Limpar o campo de entrada após o envio
        } catch (error) {
            console.error("Error sending message:", error.message);
        }
    });
});
