"use client";

import { ArrowUpLeft, CircleX, PlusCircle } from "lucide-react";
import TextareaAutosize from "react-textarea-autosize";
import { ChatCarrossel } from "./chat-carrossel";
import { useFormContext } from "react-hook-form";
import { toast } from "sonner";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useParams, usePathname, useRouter } from "next/navigation";
import { PAGE_CHAT } from "@/constants/page";

import { Button } from "@/components/ui/button";
import { useChat } from "@/hook/useChat";

export const ChatArea = () => {
    const [activeButton, setActiveButton] = useState<string | null | boolean>(
        null
    );
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();

    const { addMessage, createChat } = useChat();

    const chatId = params.id as string;

    const { register, handleSubmit, reset } = useFormContext<{
        message: string;
    }>();

    const onsubmit = (data: { message: string }) => {
        if (!data.message.trim()) {
            toast.error("O campo de mensagem não pode estar vazio!", {
                style: { marginRight: "50px" },
            });
            return;
        }

        if (!pathname.includes(PAGE_CHAT)) {
            const newChatId = createChat(data.message);
            router.push(`${PAGE_CHAT}/${newChatId}`);
            return;
        }

        if (pathname.includes(PAGE_CHAT)) {
            if (chatId) {
                addMessage(chatId, data.message);
            } else {
                toast.error("Chat não encontrado.", {
                    style: { marginRight: "50px" },
                });
            }
        }

        reset();
        setActiveButton(null);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(onsubmit)();
        }
    };

    return (
        <div className="bg-black border rounded-xl px-4 py-3 flex flex-col gap-2 mb-5 mt-auto">
            <form
                onSubmit={handleSubmit(onsubmit)}
                className="flex gap-6 items-center justify-center"
            >
                <TextareaAutosize
                    minRows={1}
                    maxRows={6}
                    placeholder="Em que posso te ajudar?"
                    autoFocus={false}
                    onKeyDown={handleKeyDown}
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
            <div className="flex gap-3">
                <ChatCarrossel
                    activeButton={activeButton as string}
                    setActiveButton={setActiveButton}
                />
                <Button
                    variant={"outline"}
                    size={"icon"}
                    className="rounded-full"
                    disabled={!activeButton}
                    onClick={() => setActiveButton(!activeButton)}
                >
                    {!activeButton ? <PlusCircle /> : <CircleX></CircleX>}
                </Button>
            </div>
        </div>
    );
};
