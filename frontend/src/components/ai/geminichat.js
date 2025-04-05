import React, { useState } from "react";

const GeminiChat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [chatStarted, setChatStarted] = useState(false);

  const startChat = () => setChatStarted(true);

  const sendMessage = async () => {
    if (!input) return;

    const userMessage = { sender: "You", text: input };
    setMessages((prev) => [...prev, userMessage]);

    const res = await fetch("http://localhost:5000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    const botReply = { sender: "Gemini", text: data.reply };
    setMessages((prev) => [...prev, botReply]);
    setInput("");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      {!chatStarted ? (
        <button onClick={startChat}>Start Chat with Gemini</button>
      ) : (
        <>
          <div style={{ border: "1px solid #ccc", height: "300px", padding: "10px", overflowY: "scroll" }}>
            {messages.map((msg, i) => (
              <p key={i}><strong>{msg.sender}:</strong> {msg.text}</p>
            ))}
          </div>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            style={{ width: "100%", padding: "10px", marginTop: "10px" }}
          />
          <button onClick={sendMessage} style={{ width: "100%", padding: "10px", marginTop: "5px" }}>
            Send
          </button>
        </>
      )}
    </div>
  );
};

export default GeminiChat;
