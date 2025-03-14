"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { toast } from "sonner";
import { PAGE_CHAT } from "@/constants/page";
import { useRouter } from "next/navigation";

type ChatContextType = {
    chats: Chat[];
    addMessage: (chatId: string, message: string) => void;
    createChat: (message: string) => string;
};

export const ChatContext = createContext<ChatContextType | undefined>(
    undefined
);

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
    const [chats, setChats] = useState<Chat[]>([]);
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
                    createdAt: new Date().toISOString(),
                },
            ],
            createdAt: new Date().toISOString(),
        };

        setChats((prevChats) => [...prevChats, newChat]);

        toast.success("Chat criado com sucesso", {
            style: { marginRight: "50px" },
        });

        return newChatId;
    };

    const addMessage = (chatId: string, message: string) => {
        setChats((prevChats) => {
            const updatedChats = prevChats.map((chat) =>
                chat.id === chatId
                    ? {
                          ...chat,
                          messages: [
                              ...chat.messages,
                              {
                                  id: uuid(),
                                  content: message,
                                  createdAt: new Date().toISOString(),
                              },
                          ],
                      }
                    : chat
            );

            const chatExists = updatedChats.some((chat) => chat.id === chatId);

            if (!chatExists) {
                const newId = uuid();

                updatedChats.push({
                    id: newId,
                    messages: [
                        {
                            id: uuid(),
                            content: message,
                            createdAt: new Date().toISOString(),
                        },
                    ],
                    createdAt: new Date().toISOString(),
                });

                router.push(`${PAGE_CHAT}/${newId}`);

                toast.success("Chat criado com sucesso", {
                    style: { marginRight: "50px" },
                });
            }

            return updatedChats;
        });
    };

    return (
        <ChatContext.Provider value={{ chats, addMessage, createChat }}>
            {children}
        </ChatContext.Provider>
    );
};

export const useChat = () => {
    const context = useContext(ChatContext);

    if (!context) {
        throw new Error("useChat deve ser usado dentro de um ChatProvider");
    }

    return context;
};
