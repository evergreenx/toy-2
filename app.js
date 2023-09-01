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
    <header class="widget__header bg-gray-800 text-white py-2 px-4">
        <h3 class="text-lg">
        MARTHA 
        </h3>
    </header>

    <div class="chat__container p-4 ">
        <div class="chat__messages-container border-none rounded-lg overflow-y-auto p-2" style="max-height: 300px;">
          <div class="chat__messages">
           
          </div>
        </div>
        <div class="chat__input mt-4 flex">
            <input
                type="text"
                id="chatInput"
                class="border border-gray-300 
                
                font-medium text-base 
            
                focus:outline-none focus:ring 
                rounded-lg w-[300px] h-[40px] px-3"
                placeholder="Type your message..."
            />
            <button id="sendMessageButton" class="ml-2 py-2 px-4 text-white rounded-full  focus:outline-none focus:ring focus:border-blue-300">
            
            
            <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.95437 1.87085C2.07876 1.76279 2.23239 1.69404 2.39585 1.67327C2.5593 1.65251 2.72525 1.68066 2.8727 1.75418L17.8727 9.25418C18.0114 9.3233 18.128 9.4297 18.2096 9.56145C18.2911 9.6932 18.3343 9.84507 18.3343 10C18.3343 10.155 18.2911 10.3068 18.2096 10.4386C18.128 10.5703 18.0114 10.6767 17.8727 10.7458L2.8727 18.2458C2.72526 18.3196 2.55924 18.348 2.39566 18.3274C2.23208 18.3068 2.07828 18.2381 1.95374 18.1301C1.8292 18.0221 1.7395 17.8795 1.696 17.7205C1.6525 17.5614 1.65715 17.3931 1.70937 17.2367L3.84437 10.8333H8.33354C8.55455 10.8333 8.76651 10.7456 8.92279 10.5893C9.07907 10.433 9.16687 10.221 9.16687 10C9.16687 9.779 9.07907 9.56704 8.92279 9.41076C8.76651 9.25448 8.55455 9.16668 8.33354 9.16668H3.84437L1.70854 2.76335C1.65659 2.60702 1.65214 2.43881 1.69574 2.27996C1.73935 2.12111 1.82989 1.97874 1.95437 1.87085Z"
              fill="black"
            />
          </svg>
            </button>
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
  const chatMessages = document.querySelector(".chat__messages");

  document.getElementById("sendMessageButton").addEventListener("click", () => {
    sendMessage(chatInput, chatMessages);
  });

  // Add event listener for Enter key press in the input field
  chatInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      sendMessage(chatInput, chatMessages);
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
  messageElement.classList.add(
    "chat__message",
    "user",
    "flex",
    "justify-end",
    "bg-blue-100",
    "text-blue-900",
    "mb-2",
    "p-2",
    "rounded-lg",
    "text-left"
  );
  messageElement.textContent = message;
  chatMessages.appendChild(messageElement);
}

function appendBotMessage(chatMessages, message) {
  const messageElement = document.createElement("div");
  messageElement.classList.add(
    "chat__message",
    "bot",

    "flex",
    "justify-start",
    "text-white",
    "bg-[#FF5BBC]",
    "mb-2",
    "p-2",
    "rounded-lg",
    "text-left"
  );
  messageElement.textContent = message;
  chatMessages.appendChild(messageElement);
}

function sendMessage(inputElement, chatMessages) {
  const userMessage = inputElement.value.trim();
  if (userMessage) {
    appendUserMessage(chatMessages, userMessage);
    inputElement.value = "";

    // Simulate a delay for the bot's response (1 second).
    setTimeout(() => {
      const botResponse = getBotResponse();
      appendBotMessage(chatMessages, botResponse);
    }, 1000);
  }
}

const botResponses = [
  " Hello there!",
  "How can I assist you?",
  "Have a great day!",
  "I'm here to help!",
];

function getBotResponse() {
  // Choose a random response from the botResponses array.
  const randomIndex = Math.floor(Math.random() * botResponses.length);
  return botResponses[randomIndex];
}

initializeChatWidget();
