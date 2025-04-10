"use client";

import { createContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { toast } from "sonner";
import { PAGE_CHAT } from "@/constants/page";
import { useRouter } from "next/navigation";

type Message = {
  id: string;
  content?: string;
  response?: string;
  createdAt: string;
  role: "user" | "agent";
};

type Chat = {
  id: string;
  messages: Message[];
  createdAt: string;
};

type ChatContextType = {
  chats: Chat[];
  addResponseAgent: (chatId: string, response: string) => void;
  addMessage: (chatId: string, message: string) => void;
  createChat: (message: string) => string;
  removeChat: (id: string) => void;
  getChat: (id: string) => Message[] | undefined;
  isAwaitingResponse: boolean;
  setIsAwaitingResponse: (value: boolean) => void;
};

export const ChatContext = createContext<ChatContextType | undefined>(
  undefined
);

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [chats, setChats] = useState<Chat[]>([]);
  const [isAwaitingResponse, setIsAwaitingResponse] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedChats = JSON.parse(localStorage.getItem("chats") || "[]");
    setChats(storedChats);
  }, []);

  useEffect(() => {
    localStorage.setItem("chats", JSON.stringify(chats));
  }, [chats]);

  const createChat = (message: string) => {
    const newChatId = uuid();
    const newChat: Chat = {
      id: newChatId,
      messages: [
        {
          id: uuid(),
          content: message,
          role: "user",
          createdAt: new Date().toISOString(),
        },
      ],
      createdAt: new Date().toISOString(),
    };

    const updatedChats = [...chats, newChat];
    setChats(updatedChats);
    localStorage.setItem("chats", JSON.stringify(updatedChats));

    toast.success("Chat criado com sucesso", {
      style: { marginRight: "50px" },
    });

    setIsAwaitingResponse(true);
    return newChatId;
  };

  const addMessage = (chatId: string, message: string) => {
    setChats((prevChats) => {
      const chatExists = prevChats.some((chat) => chat.id === chatId);
      let updatedChats: Chat[];

      if (chatExists) {
        updatedChats = prevChats.map((chat) =>
          chat.id === chatId
            ? {
                ...chat,
                messages: [
                  ...chat.messages,
                  {
                    id: uuid(),
                    content: message,
                    role: "user",
                    createdAt: new Date().toISOString(),
                  },
                ],
              }
            : chat
        );
      } else {
        const newId = uuid();
        router.push(`${PAGE_CHAT}/${newId}`);

        const newChat: Chat = {
          id: newId,
          messages: [
            {
              id: uuid(),
              content: message,
              role: "user",
              createdAt: new Date().toISOString(),
            },
          ],
          createdAt: new Date().toISOString(),
        };

        updatedChats = [...prevChats, newChat];
      }

      localStorage.setItem("chats", JSON.stringify(updatedChats));
      return updatedChats;
    });

    setIsAwaitingResponse(true);
  };

  const addResponseAgent = (chatId: string, response: string) => {
    const updatedChats = chats.map((chat) => {
      if (chat.id !== chatId) return chat;

      const lastAgentMessage = [...chat.messages]
        .reverse()
        .find((m) => m.role === "agent");

      const alreadyExists = lastAgentMessage?.response === response;
      if (alreadyExists) return chat;

      const agentMessage: Message = {
        id: uuid(),
        response,
        role: "agent",
        createdAt: new Date().toISOString(),
      };

      return { ...chat, messages: [...chat.messages, agentMessage] };
    });

    setChats(updatedChats);
    localStorage.setItem("chats", JSON.stringify(updatedChats));
    setIsAwaitingResponse(false);
  };

  const getChat = (id: string): Message[] | undefined => {
    return chats.find((chat) => chat.id === id)?.messages;
  };

  const removeChat = (id: string) => {
    const updatedChats = chats.filter((chat) => chat.id !== id);
    setChats(updatedChats);
    localStorage.setItem("chats", JSON.stringify(updatedChats));

    toast.success("Chat removido com sucesso", {
      style: { marginRight: "50px" },
    });
  };

  return (
    <ChatContext.Provider
      value={{
        chats,
        addMessage,
        createChat,
        removeChat,
        getChat,
        addResponseAgent,
        isAwaitingResponse,
        setIsAwaitingResponse,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
