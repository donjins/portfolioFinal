import React, { useEffect, useState } from "react";
import { Inbox, Loader2, Mail, User, AlertTriangle } from "lucide-react";
const backendURL = process.env.REACT_APP_BACKEND_URL;


interface Message {
  _id: string;
  senderName: string;
  senderEmail: string;
  message: string;
  createdAt: string;
}

function Message() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        setError(null);
        const response = await fetch( `${backendURL}api/messages`);

        // Use environment variable
        if (!response.ok) throw new Error("Failed to fetch messages");
        const data = await response.json();
        setMessages(data);
      } catch (err) {
        setError("Error fetching messages. Please try again.");
        console.error("Error fetching messages:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm">
          <div className="border-b border-gray-200 px-6 py-4">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-600" />
              <h1 className="text-xl font-semibold text-gray-900">Messages</h1>
            </div>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-6 h-6 animate-spin text-gray-600" />
              <span className="ml-2 text-gray-600">Loading messages...</span>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center py-12 px-6">
              <AlertTriangle className="w-12 h-12 text-red-500 mb-4" />
              <p className="text-red-500 text-lg">{error}</p>
            </div>
          ) : messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 px-6">
              <Inbox className="w-12 h-12 text-gray-400 mb-4" />
              <p className="text-gray-500 text-lg">No messages found</p>
              <p className="text-gray-400 text-sm mt-1">Messages will appear here when they arrive</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {messages.map((message) => (
                <div key={message._id} className="px-6 py-4 hover:bg-gray-50 transition-colors duration-150">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <User className="w-5 h-5 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h2 className="text-sm font-medium text-gray-900">{message.senderName}</h2>
                        <span className="text-xs text-gray-500">{new Date(message.createdAt).toLocaleString()}</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">{message.senderEmail}</p>
                      <p className="text-sm text-gray-700 mt-2 whitespace-pre-wrap">{message.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Message;
