"use client";

import {
  Download,
  Trash2,
  Send,
  Loader2,
  Bot,
  User,
  MessageCircle,
} from "lucide-react";
import { ChangeEvent } from "react";
import { useChat } from "@/hooks/useChat";
import { formatTime, exportChat } from "@/lib/utils";

export default function Chat() {
  const {
    messages,
    input,
    setInput,
    loading,
    sendMessage,
    clearChat,
    messagesEndRef,
  } = useChat();

  return (
    <div
      className="flex flex-col h-full 
                  bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 
                  dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-gray-900 
                  shadow-lg rounded-lg overflow-hidden 
                  border-2 border-gray-200/50 dark:border-gray-700/50"
    >
      {/* Header */}
      <div
        className="flex-shrink-0 
                    bg-white/80 dark:bg-gray-800/80 
                    backdrop-blur-sm shadow-sm 
                    border-b border-gray-200/50 dark:border-gray-700/50 
                    px-4 py-4 flex items-center justify-between"
      >
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div
              className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 
                          dark:from-blue-400 dark:to-purple-500 
                          rounded-full flex items-center justify-center shadow-lg"
            >
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div
              className="absolute -bottom-1 -right-1 w-3 h-3 
                          bg-green-400 dark:bg-green-500 
                          border-2 border-white dark:border-gray-800 
                          rounded-full"
            ></div>
          </div>
          <div>
            <h1 className="font-bold text-lg text-gray-800 dark:text-gray-100">
              AI Assistant
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
              <span
                className="w-2 h-2 bg-green-400 dark:bg-green-500 
                           rounded-full mr-2 animate-pulse"
              ></span>
              Online
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => exportChat(messages)} 
            disabled={messages.length === 0}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 
                     rounded-lg transition-colors 
                     disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            title="Exportar chat"
          >
            <Download className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
          <button
            onClick={clearChat}
            disabled={messages.length === 0}
            className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 
                     hover:text-red-600 dark:hover:text-red-400 
                     rounded-lg transition-colors 
                     disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            title="Limpiar chat"
          >
            <Trash2 className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      </div>

      {/* Messages Area */}
      <div
        className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0"
        aria-live="polite"
        role="log"
      >
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div
              className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 
                          dark:from-blue-400 dark:to-purple-500 
                          rounded-full flex items-center justify-center mb-4 shadow-lg"
            >
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2">
              Start a conversation!
            </h3>
            <p className="text-gray-500 dark:text-gray-400 max-w-md">
              Type a message below to start chatting with the AI assistant.
            </p>
          </div>
        ) : (
          <>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-start space-x-3 ${
                  message.sender === "user"
                    ? "flex-row-reverse space-x-reverse"
                    : ""
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm ${
                    message.sender === "user"
                        ? "bg-gradient-to-r from-slate-400 to-slate-500 dark:from-slate-500 dark:to-slate-400 text-white rounded-br-md"
                      : "bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500"
                  }`}
                >
                  {message.sender === "user" ? (
                    <User className="w-4 h-4 text-white" aria-hidden="true" />
                  ) : (
                    <Bot className="w-4 h-4 text-white" aria-hidden="true" />
                  )}
                </div>
                <div
                  className={`max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl ${
                    message.sender === "user" ? "text-right" : "text-left"
                  }`}
                >
                  <div
                    className={`inline-block px-4 py-3 rounded-2xl shadow-sm ${
                      message.sender === "user"
                        ? "bg-gradient-to-r from-slate-400 to-slate-500 dark:from-slate-500 dark:to-slate-400 text-white rounded-br-md"
                        : "bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-bl-md border border-gray-200 dark:border-gray-600"
                    }`}
                  >
                    <p
                      className="text-sm leading-relaxed whitespace-pre-wrap"
                      {...(message.text.startsWith("Error de conexión:")
                        ? { role: "alert" }
                        : {})}
                    >
                      {message.text}
                    </p>
                    {message.timestamp && (
                      <p
                        className={`text-xs mt-1 ${
                          message.sender === "user"
                            ? "text-green-100 dark:text-green-200"
                            : "text-gray-500 dark:text-gray-400"
                        }`}
                      >
                        {formatTime(message.timestamp)}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex items-start space-x-3">
                <div
                  className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 
                              dark:from-blue-400 dark:to-purple-500 
                              flex items-center justify-center flex-shrink-0 shadow-sm"
                >
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div
                  className="bg-white dark:bg-gray-700 
                              rounded-2xl rounded-bl-md px-4 py-3 shadow-sm 
                              border border-gray-200 dark:border-gray-600"
                >
                  <div className="flex items-center space-x-2">
                    <Loader2 className="w-4 h-4 animate-spin text-blue-500 dark:text-blue-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      Typing...
                    </span>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div
        className="flex-shrink-0 
                    bg-white/80 dark:bg-gray-800/80 
                    backdrop-blur-sm 
                    border-t border-gray-200/50 dark:border-gray-700/50 
                    p-4"
      >
        <form
          onSubmit={sendMessage}
          className="flex items-end space-x-3 max-w-4xl mx-auto"
        >
          <div className="flex-1 relative">
            <label htmlFor="chat-input" className="sr-only">
              Escribe tu mensaje
            </label>
            <textarea
              id="chat-input"
              value={input}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setInput(e.target.value)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  const form = e.currentTarget.closest("form");
                  if (form) {
                    const event = new Event("submit", {
                      bubbles: true,
                      cancelable: true,
                    });
                    form.dispatchEvent(event);
                  }
                }
              }}
              placeholder="Type your message here..."
              disabled={loading}
              rows={1}
              className="w-full px-4 py-3 
                       text-gray-700 dark:text-gray-200 
                       bg-white/90 dark:bg-gray-700/90
                       border border-gray-300 dark:border-gray-600 
                       placeholder:text-gray-500 dark:placeholder:text-gray-400
                       rounded-2xl 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
                       focus:border-transparent 
                       transition-all duration-200 resize-none 
                       min-h-[48px] max-h-32 
                       disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                height: "auto",
                minHeight: "48px",
              }}
              onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = "48px";
                target.style.height = Math.min(target.scrollHeight, 128) + "px";
              }}
            />
          </div>
          <button
            type="submit"
            disabled={!input.trim() || loading}
            className={`p-3 rounded-2xl transition-all duration-200 flex-shrink-0 shadow-lg ${
              input.trim() && !loading
                ? "bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 text-white hover:scale-105 hover:shadow-xl cursor-pointer"
                : "bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed"
            }`}
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
          </button>
        </form>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center max-w-4xl mx-auto">
          Press Enter to send, Shift+Enter for a new line
        </p>
      </div>
    </div>
  );
}
