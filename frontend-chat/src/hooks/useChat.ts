// hooks/useChat.ts
import { useState, useRef, useEffect, FormEvent } from "react";
import { Message } from "@/types/message";
import { scrollToBottom } from "@/lib/utils";
import { sendMessageApi, clearMessages } from "@/services/chat";


/**
 * Custom hook for managing chat messages and input state.
 * Handles sending messages, loading state, and scrolling to the bottom of the chat.
 */
export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom(messagesEndRef);
  }, [messages]);

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      sender: "user",
      text: input,
      timestamp: new Date(),
    };

    setMessages((msgs) => [...msgs, userMessage]);
    setLoading(true);
    const currentInput = input;
    setInput("");

    try {
      const botMessage = await sendMessageApi(currentInput);
      setMessages((msgs) => [...msgs, botMessage]);
    } catch (err) {
      setMessages((msgs) => [
        ...msgs,
        {
          sender: "bot",
          text: `Error conexion: ${
            err instanceof Error ? err.message : "Unknown error"
          }`,
          timestamp: new Date(),
        },
      ]);
    }

    setLoading(false);
  };

  const clearChat = () => {
    setMessages(clearMessages());
  };

  return {
    messages,
    input,
    setInput,
    loading,
    sendMessage,
    clearChat,
    messagesEndRef,
  };
}
