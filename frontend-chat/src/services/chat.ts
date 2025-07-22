import { Message } from "@/types/message";

/**
 * Sends a chat message to the server.
 * @param message Send the user's chat message.
 * @returns The bot's response message.
 */
export async function sendMessageApi(message: string): Promise<Message> {
  const response = await fetch("http://localhost:8000/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  return {
    sender: "bot",
    text: data.response,
    timestamp: new Date(),
  };
}


/**
 * Clears the chat messages.
 * @returns An empty array of messages.
 */
export function clearMessages(): Message[] {
  return [];
}
