import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  message: string;
  isAi: boolean;
  timestamp: Date;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message, isAi, timestamp }) => {
  return (
    <div className={`flex w-full ${isAi ? 'justify-start' : 'justify-end'} mb-4`}>
      <div className={`flex items-start max-w-[80%] ${isAi ? 'flex-row' : 'flex-row-reverse'}`}>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isAi ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'} mr-2`}>
          {isAi ? <Bot size={20} /> : <User size={20} />}
        </div>
        <div>
          <div className={`rounded-2xl px-4 py-2 ${isAi ? 'bg-blue-50 text-gray-800' : 'bg-gray-100 text-gray-800'}`}>
            <p className="text-sm">{message}</p>
          </div>
          <span className="text-xs text-gray-500 mt-1 block">
            {formatDistanceToNow(timestamp, { addSuffix: true })}
          </span>
        </div>
      </div>
    </div>
  );
};