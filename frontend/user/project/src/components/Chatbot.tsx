import React, { useState, useRef, useEffect } from "react";
import { Mic, Send } from "lucide-react";
import { ChatMessage } from "./ChatMessage";
import { TypingIndicator } from "./TypingIndicator";
import { QuickReplies } from "./QuickReplies";

interface Message {
  id: string;
  text: string;
  isAi: boolean;
  timestamp: Date;
}

const predefinedResponses: { [key: string]: string } = {
  "What is your name?": "My name is Joseph Don Jins.",
  "Where are you from?": "I am from Kerala, India.",
  "What do you do?": "I am a MERN stack developer currently learning full-stack development.",
  "What are you learning?": "I am learning the MERN stack, data structures, algorithms, and Python.",
  "Where did you study?": "I completed my BCA from MG University (Mar Augusthinose College) in 2024.",
  "What are your goals?": "I want to become one of the best developers and get a high-paying job in a top product-based company like Apple, Google, or Amazon.",
  "What projects are you working on?": "I am working on multiple projects, including an **e-commerce platform for eco-friendly sofas**, a **weather app**, a **news aggregator**, and **Omnifood (a meal subscription service).**",
  "What is your dream job?": "I want to work at a top product-based company with a high salary and create amazing projects.",
  "What are your skills?": "I have skills in **JavaScript, React, Node.js, Express, MongoDB, and basic Python & DSA.**",
  "What are your hobbies?": "I like traveling, coding, and sometimes feel like an introvert.",
  "Do you have work experience?": "I don't have work experience yet, but I am building projects and improving my skills daily.",
  "Where do you study coding?": "I am studying at **MashupStack** as an assignment stack developer.",
  "What are you working on now?": "Currently, I am focusing on completing my MERN stack studies and building my e-commerce platform.",
};

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  
  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isAi: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Check if input matches a predefined question
    const responseText =
      predefinedResponses[inputValue.trim()] ||
      "ask about my learning , goals, projects, skills, hobbies, work experience, study, dream job, or anything else.";

    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        isAi: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-end justify-end p-4 sm:p-6">
      <div className={`bg-white rounded-lg shadow-lg w-full max-w-lg ${isWidgetOpen ? 'h-[600px]' : 'h-14'} flex flex-col transition-all duration-300 ease-in-out`}>
        {/* Header */}
        <div className="px-6 py-4 border-b flex items-center justify-between bg-white rounded-t-lg">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/011/961/865/small/programmer-icon-line-color-illustration-vector.jpg"
                alt="AI Assistant"
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">AI Assistant</h3>
              <p className="text-xs text-green-500">Online</p>
            </div>
          </div>
          <button
            onClick={() => setIsWidgetOpen(!isWidgetOpen)}
            className="text-gray-400 hover:text-gray-600"
          >
            {isWidgetOpen ? '−' : '+'}
          </button>
        </div>

        {isWidgetOpen && (
          <>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {messages.map((message) => (
                <ChatMessage
                  key={message.id}
                  message={message.text}
                  isAi={message.isAi}
                  timestamp={message.timestamp}
                />
              ))}
              {isTyping && (
                <div className="flex items-center space-x-2 mb-4">
                  <TypingIndicator />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            <div className="px-6">
              <QuickReplies
                suggestions={["What is your name?", "What do you do?", "Where are you from?"]}
                onSelect={(msg) => setInputValue(msg)}
              />
            </div>

            {/* Input */}
            <div className="border-t p-4">
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors">
                  <Mic size={20} />
                </button>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim()}
                  className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
