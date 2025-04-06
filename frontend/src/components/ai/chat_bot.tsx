import { useState, useEffect, useRef, KeyboardEvent, ChangeEvent } from 'react';
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
  const popupRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const dragging = useRef(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (dragging.current && popupRef.current) {
        const dx = e.clientX - pos.current.x;
        const dy = e.clientY - pos.current.y;
        const style = window.getComputedStyle(popupRef.current);
        const left = parseInt(style.left, 10);
        const top = parseInt(style.top, 10);
        popupRef.current.style.left = `${left + dx}px`;
        popupRef.current.style.top = `${top + dy}px`;
        pos.current = { x: e.clientX, y: e.clientY };
      }
    };

    const handleMouseUp = () => {
      dragging.current = false;
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const startDrag = (e: React.MouseEvent) => {
    dragging.current = true;
    pos.current = { x: e.clientX, y: e.clientY };
  };

  const togglePopup = () => {
    setIsOpen((prev) => !prev);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages: Message[] = [...messages, { text: input, sender: 'user' }];
    setMessages(newMessages);
    setInput('');

    try {
      const res = await axios.post('https://shiksha-darpan-1.onrender.com/chat', { message: input });
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
      <img
        src="https://img.icons8.com/?size=100&id=114358&format=png&color=000000"
        alt="Chatbot"
        className="chat-button"
        onClick={togglePopup}
      />


      {isOpen && (
        <div ref={popupRef} className="chat-popup">
          <div className="chat-header" onMouseDown={startDrag}>
            Shiksha Chat
            <div className="chat-header">
              <div className="close-container" onClick={togglePopup}>
                <div className="leftright"></div>
                <div className="rightleft"></div>
                <label className="close">close</label>
              </div>
            </div>

          </div>

          <div className="chat-body">
            {messages.map((msg, i) => (
              <div key={i} className={msg.sender === 'user' ? 'user-msg' : 'bot-msg'}>
                {msg.text}
              </div>
            ))}
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
            <button className="clear-btn" onClick={() => setMessages([])}>🧹</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
