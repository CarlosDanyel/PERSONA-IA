"use client";

import { createContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { toast } from "sonner";
import { PAGE_CHAT } from "@/constants/page";
import { useRouter } from "next/navigation";

type ChatContextType = {
    chats: Chat[];
    addMessage: (chatId: string, message: string) => void;
    createChat: (message: string) => string;
    removeChat: (id: string) => void;
    getChat: (id: string) => Message[] | undefined;
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

                router.push(`${PAGE_CHAT}/${newId}`);

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

                toast.success("Chat criado com sucesso", {
                    style: { marginRight: "50px" },
                });
            }

            return updatedChats;
        });
    };

    const getChat = (id: string): Message[] | undefined => {
        const chat = chats.find((chat) => chat.id === id);

        return chat?.messages;
    };

    const removeChat = (id: string) => {
        const storedChats = JSON.parse(localStorage.getItem("chats") || "[]");

        const updatedChats = storedChats.filter(
            (chat: { id: string }) => chat.id !== id
        );

        localStorage.setItem("chats", JSON.stringify(updatedChats));

        setChats(updatedChats);

        toast.success("Chat removido com sucesso", {
            style: { marginRight: "50px" },
        });
    };

    return (
        <ChatContext.Provider
            value={{ chats, addMessage, createChat, removeChat, getChat }}
        >
            {children}
        </ChatContext.Provider>
    );
};
