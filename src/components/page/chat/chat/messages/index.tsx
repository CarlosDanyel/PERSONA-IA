"use client";

import { useEffect, useState } from "react";
import { UserMessage } from "./user-message";
import { AIMessage } from "./ai-message";

type ClientChatProps = {
    message: string;
};

type Message = {
    sender: "user" | "ai";
    text: string;
};

export const ClientChat = ({ message }: ClientChatProps) => {
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        const aiResponse = `wqahidajdjhiasbhjdgbhijapinda: "${message}"`;

        setMessages((prevMessages) => [
            ...prevMessages,
            { sender: "user", text: message },
            { sender: "ai", text: aiResponse },
        ]);
    }, [message]);

    console.log(messages, messages);

    return (
        <div className=" my-6 w-full h-[34rem] bg-sidebar rounded-3xl overflow-y-auto pb-8 pt-6 px-28">
            {messages.map((item, index) =>
                item.sender === "user" ? (
                    <UserMessage key={index} text={item.text} />
                ) : (
                    <AIMessage key={index} text={item.text} />
                )
            )}
        </div>
    );
};
