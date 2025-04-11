"use client";

import { useChat } from "@/hooks/useChat";
import { AIMessage } from "./messages/ai-message";
import { UserMessage } from "./messages/user-message";
import { useParams } from "next/navigation";
import { Fragment, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { queyKeys } from "@/constants/querys-keys";
import { ApiServices } from "@/services/api";

export const Chat = () => {
    const params = useParams();
    const chatId = params.id as string;
    const { getChat, addResponseAgent } = useChat();
    const chat = getChat(chatId) as Message[];
    const isAwaitingResponse = chat?.[chat.length - 1]?.role === "agent";

    const chatContainerRef = useRef<HTMLDivElement>(null);

    const { data } = useQuery({
        queryKey: queyKeys.response,
        queryFn: ApiServices.responseMessage,
        refetchInterval: 3000,
    });

    useEffect(() => {
        if (!data || !chat) return;

        const lastAgentMessage = [...chat]
            .reverse()
            .find((message) => message.role === "agent");

        const alreadyExists = lastAgentMessage?.response === data.output;

        if (!alreadyExists) {
            console.log("🔁 Adicionando nova resposta:", data.output);
            addResponseAgent(data.chatid, data.output);
        }
    }, [data, chat]);

    useEffect(() => {
        const container = chatContainerRef.current;
        if (container) {
            container.scrollTop = container.scrollHeight;
        }
    }, [data, chat?.length]);

    if (!chat) return <></>;

    return (
        <section
            className={cn(
                "w-full h-full rounded mt-12 mb-3 flex pb-0 overflow-hidden"
            )}
        >
            <div
                className={cn(
                    "bg-sidebar w-1/12 h-full",
                    !isAwaitingResponse && "animate-pulse"
                )}
            />
            <div
                ref={chatContainerRef}
                className="w-full h-full scrollbar-hide overflow-y-scroll"
            >
                <div
                    className={cn(
                        "w-full h-auto max-w-[1000px] px-5 mx-auto bg-black "
                    )}
                >
                    {chat.map((item) => (
                        <Fragment key={item.id}>
                            {item.role === "user" && item.content && (
                                <UserMessage text={item.content} />
                            )}

                            {item.role === "agent" && item.response && (
                                <AIMessage text={item.response} />
                            )}
                        </Fragment>
                    ))}
                    {chat[chat.length - 1]?.role === "user" && (
                        <AIMessage type="loading" />
                    )}
                </div>
            </div>
            <div
                className={cn(
                    "bg-sidebar w-1/12 h-full",
                    !isAwaitingResponse && "animate-pulse"
                )}
            />
        </section>
    );
};
