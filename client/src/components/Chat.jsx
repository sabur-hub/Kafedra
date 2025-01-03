import React, { useState } from "react";
import axios from "axios";
import "./Chat.css";
import Footer from "../Footer.jsx";

const Chat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [apiUrl, setApiUrl] = useState(
    "https://f948-35-194-143-66.ngrok-free.app/api/generate"
  );
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleUrlChange = (event) => {
    setApiUrl(event.target.value); // Автоматически обновляем API URL
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!input) return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: input, sender: "user" },
    ]);

    try {
      const response = await axios.post(apiUrl, {
        prompt: input,
      });

      const answer = response.data.response;

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: answer, sender: "ai" },
      ]);
      setError(null); // Сбрасываем ошибку, если запрос успешен
    } catch (error) {
      console.error("Ошибка при получении ответа:", error);

      const isCorsError =
        error.message.includes("CORS") ||
        error.message.includes("No 'Access-Control-Allow-Origin'");
      const isResourceLoadError = error.message.includes("Failed to load");

      if (
        error.response && error.response.status === 404 ||
        isCorsError ||
        isResourceLoadError
      ) {
        setError(
          "Произошла ошибка подключения к серверу. Проверьте URL и попробуйте снова."
        );
      } else {
        setError("Произошла ошибка. Попробуйте снова.");
      }

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: error.message || "Ошибка при отправке запроса.", sender: "ai" },
      ]);
    } finally {
      setInput("");
    }
  };

  return (
    <div>
      <div className="chat-container">
        <div className="url-form">
          <input
            type="text"
            value={apiUrl}
            onChange={handleUrlChange} // Обновляем URL при изменении текста
            placeholder="Введите URL API..."
            className="url-input"
          />
        </div>

        {error && <div className="error-message">{error}</div>}

        <div className="messages">
          {messages.length === 0 ? (
            <div className="placeholder">
              Наведите свои вопросы, чтобы начать!
            </div>
          ) : (
            messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                {message.text}
              </div>
            ))
          )}
        </div>
        <form onSubmit={handleSubmit} className="chat-form">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Введите ваш вопрос..."
            className="chat-input"
          />
          <button type="submit" className="chat-submit">
            Отправить
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Chat;
