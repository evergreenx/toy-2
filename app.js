




import { CLOSE_ICON, MESSAGE_ICON, styles } from "./assets.js";

function getPosition(position) {
  const [vertical, horizontal] = position.split("-");
  return {
    [vertical]: "30px",
    [horizontal]: "30px",
  };
}

function createChatContent(widgetContainer) {
  widgetContainer.innerHTML = `
    <header class="widget__header">
        <h3>Chat Widget</h3>
    </header>

    <div class="chat__container">
        <div class="chat__messages" id="chatMessages"></div>
        <div class="chat__input">
            <input
                type="text"
                id="chatInput"
                placeholder="Type your message..."
            />
            <button id="sendMessageButton">Send</button>
        </div>
    </div>
  `;
}

function injectStyles() {
  const styleTag = document.createElement("style");
  styleTag.innerHTML = styles.replace(/^\s+|\n/gm, "");
  document.head.appendChild(styleTag);
}

function toggleChat(widget) {
  widget.open = !widget.open;
  if (widget.open) {
    widget.widgetIcon.classList.add("widget__hidden");
    widget.closeIcon.classList.remove("widget__hidden");
    widget.widgetContainer.classList.remove("widget__hidden");
  } else {
    createChatContent(widget.widgetContainer);
    widget.widgetIcon.classList.remove("widget__hidden");
    widget.closeIcon.classList.add("widget__icon", "widget__hidden");
    widget.widgetContainer.classList.add("widget__hidden");
  }
}

function initializeChatWidget(position = "bottom-right") {
  injectStyles();

  const container = document.createElement("div");
  container.style.position = "fixed";
  const positionStyles = getPosition(position);
  Object.keys(positionStyles).forEach(
    (key) => (container.style[key] = positionStyles[key])
  );
  document.body.appendChild(container);

  const buttonContainer = document.createElement("button");
  buttonContainer.classList.add("button__container");

  const widgetIconElement = document.createElement("span");
  widgetIconElement.innerHTML = MESSAGE_ICON;
  widgetIconElement.classList.add("widget__icon");

  const closeIconElement = document.createElement("span");
  closeIconElement.innerHTML = CLOSE_ICON;
  closeIconElement.classList.add("widget__icon", "widget__hidden");

  buttonContainer.appendChild(widgetIconElement);
  buttonContainer.appendChild(closeIconElement);

  const widgetContainer = document.createElement("div");
  widgetContainer.classList.add("widget__hidden", "widget__container");

  createChatContent(widgetContainer);

  container.appendChild(widgetContainer);
  container.appendChild(buttonContainer);

  buttonContainer.addEventListener("click", () => toggleChat(widget));

  const chatInput = document.getElementById("chatInput");
  const chatMessages = document.getElementById("chatMessages");

  document.getElementById("sendMessageButton").addEventListener("click", () => {
    const userMessage = chatInput.value.trim();
    if (userMessage) {
      appendUserMessage(chatMessages, userMessage);
      chatInput.value = "";

      // Simulate a delay for the bot's response (1 second).
      setTimeout(() => {
        const botResponse = getBotResponse();
        appendBotMessage(chatMessages, botResponse);
      }, 1000);
    }
  });

  const widget = {
    position,
    open: false,
    widgetIcon: widgetIconElement,
    closeIcon: closeIconElement,
    widgetContainer,
  };

  return widget;
}

function appendUserMessage(chatMessages, message) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("chat__message", "user");
  messageElement.textContent = message;
  chatMessages.appendChild(messageElement);
}

function appendBotMessage(chatMessages, message) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("chat__message", "bot");
  messageElement.textContent = message;
  chatMessages.appendChild(messageElement);
}

const botResponses = [
  "Bot: Hello there!",
  "Bot: How can I assist you?",
  "Bot: Have a great day!",
  "Bot: I'm here to help!",
];

function getBotResponse() {
  // Choose a random response from the botResponses array.
  const randomIndex = Math.floor(Math.random() * botResponses.length);
  return botResponses[randomIndex];
}

initializeChatWidget();
