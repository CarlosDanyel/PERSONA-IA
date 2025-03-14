"use client";

import { ArrowUpLeft } from "lucide-react";
import TextareaAutosize from "react-textarea-autosize";
import { ChatCarrossel } from "./chat-carrossel";
import { useFormContext } from "react-hook-form";
import { toast } from "sonner";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useParams, usePathname, useRouter } from "next/navigation";
import { v4 as uuid } from "uuid";
import { PAGE_CHAT } from "@/constants/page";

type ChatAreaProps = {
    setStateValue: (data: string) => void;
};

export const ChatArea = ({ setStateValue }: ChatAreaProps) => {
    const [activeButton, setActiveButton] = useState<string | null>(null);
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();

    const chatId = params.id;

    const { register, handleSubmit, reset } = useFormContext<{
        message: string;
    }>();

    const onsubmit = (data: { message: string }) => {
        if (!data.message.trim()) {
            toast.error("O campo de mensagem não pode estar vazio!", {
                style: {
                    marginRight: "50px",
                },
            });
            return;
        }

        if (!pathname.includes(PAGE_CHAT)) {
            const newChatId = uuid();
            const newChat = {
                id: newChatId,
                message: [
                    {
                        id: uuid(),
                        message: data.message,
                        createdAt: new Date().toISOString(),
                    },
                ],
                createdAt: new Date().toISOString(),
            };

            const existingChats = JSON.parse(
                localStorage.getItem("chats") || "[]"
            );
            existingChats.push(newChat);
            localStorage.setItem("chats", JSON.stringify(existingChats));

            router.push(`/chat/${newChatId}`);
            return;
        }

        if (pathname.includes(PAGE_CHAT)) {
            const chats = JSON.parse(localStorage.getItem("chats") || "[]");
            const chat = chats.find(
                (chat: { id: string }) => chat.id === chatId
            );

            if (chat) {
                chat.message.push({
                    id: uuid(),
                    message: data.message,
                    createdAt: new Date().toISOString(),
                });

                const updatedChats = chats.map((existingChat: { id: string }) =>
                    existingChat.id === chatId ? chat : existingChat
                );

                localStorage.setItem("chats", JSON.stringify(updatedChats));

                setStateValue(data.message);
            } else {
                toast.error("Chat não encontrado.", {
                    style: {
                        marginRight: "50px",
                    },
                });
            }
        }

        reset();
        setActiveButton(null);
    };

    return (
        <div className="bg-black border rounded-xl px-4 py-3 flex flex-col gap-2 mb-3">
            <form
                onSubmit={handleSubmit(onsubmit)}
                className="flex gap-6 items-center justify-center"
            >
                <TextareaAutosize
                    minRows={1}
                    maxRows={6}
                    placeholder="Em que posso te ajudar?"
                    autoFocus={false}
                    {...register("message")}
                    className={cn(
                        "w-full h-fit resize-none focus:outline-none bg-transparent scrollbar-hide",
                        "placeholder:text-sm"
                    )}
                />
                <button
                    type="submit"
                    className="h-[30px] mt-auto rounded-xl p-2 bg-foreground text-muted flex justify-center items-center "
                >
                    <ArrowUpLeft size={20} />
                </button>
            </form>
            <ChatCarrossel
                activeButton={activeButton}
                setActiveButton={setActiveButton}
            />
        </div>
    );
};
