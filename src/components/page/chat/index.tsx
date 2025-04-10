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
  const { getChat, addResponseAgent, isAwaitingResponse } = useChat();
  const chat = getChat(chatId);

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
      addResponseAgent(data.chatid, data.output);
    }
  }, [data, chat]);

  useEffect(() => {
    const container = chatContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [chat?.length, data]);

  if (!chat) return <></>;

  return (
    <section className={cn("w-full h-full rounded mt-5 flex py-10")}>
      <div className="bg-sidebar w-1/12 h-full" />
      <div
        ref={chatContainerRef}
        className={cn(
          "w-full h-full max-w-[900px] px-5 mx-auto bg-black  scrollbar-hide overflow-y-scroll"
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

        {isAwaitingResponse && <AIMessage type="loading" />}
      </div>
      <div className="bg-sidebar w-1/12 h-full " />
    </section>
  );
};
