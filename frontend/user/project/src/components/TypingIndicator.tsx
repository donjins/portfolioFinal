import React from 'react';

export const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-center space-x-1 px-4 py-2 bg-blue-50 rounded-2xl w-16">
      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
    </div>
  );
};