import { useState, KeyboardEvent, ChangeEvent } from 'react';
import './chat_bot_style.css';
import axios from 'axios';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const togglePopup = () => {
    setIsOpen((prev) => !prev);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages: Message[] = [...messages, { text: input, sender: 'user' }];
    setMessages(newMessages);
    setInput('');

    try {
      const res = await axios.post('http://localhost:5000/chat', { message: input });
      const botReply = res.data.reply;
      setMessages([...newMessages, { text: botReply, sender: 'bot' }]);
    } catch (error) {
      setMessages([...newMessages, { text: 'Error from Gemini API', sender: 'bot' }]);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="App">
      <button className="chat-button" onClick={togglePopup}>
        💬
      </button>

      <div className={`chat-popup ${isOpen ? 'open' : ''}`}>
        <div className="chat-header">
          Gemini Chat
          <button className="close-btn" onClick={togglePopup}>×</button>
        </div>
        <div className="chat-header">
          <button className="clear-btn" onClick={() => setMessages([])}>🧹</button>
        </div>

        <div className="chat-input">
          <input
            type="text"
            placeholder="Ask something..."
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <button onClick={sendMessage}>Send</button>
        </div>

        <div className="chat-body">
          {messages.map((msg, i) => (
            <div key={i} className={msg.sender === 'user' ? 'user-msg' : 'bot-msg'}>
              {msg.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
