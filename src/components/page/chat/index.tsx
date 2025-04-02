import { useChat } from "@/hooks/useChat";
import { AIMessage } from "./messages/ai-message";
import { UserMessage } from "./messages/user-message";
import { useParams } from "next/navigation";
import { Suspense } from "react";

export const Chat = () => {
    const params = useParams();
    const chatId = params.id as string;
    const { getChat } = useChat();

    const chat = getChat(chatId);

    if (!chat) {
        return <></>;
    }

    return (
        <section className="w-full h-full rounded mt-5 flex py-10">
            <div className="bg-sidebar w-1/12 h-full" />
            <div className="w-full h-full bg-black px-20  scrollbar-hide overflow-y-scroll">
                {chat.map((item) => (
                    <Suspense key={item.id}>
                        <UserMessage text={item.content} />
                        <AIMessage text="Olá, tudo bem, como Vai?" />
                    </Suspense>
                ))}
            </div>
            <div className="bg-sidebar  w-1/12 h-full" />
        </section>
    );
};
