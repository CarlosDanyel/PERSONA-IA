"use client";

import { ArrowUpLeft } from "lucide-react";
import TextareaAutosize from "react-textarea-autosize";
import { ChatCarrossel } from "./chat-carrossel";
import { useFormContext } from "react-hook-form";
import { toast } from "sonner";
import { useState } from "react";

type ChatAreaProps = {
    setStateValue: (data: string) => void;
};

export const ChatArea = ({ setStateValue }: ChatAreaProps) => {
    const [activeButton, setActiveButton] = useState<string | null>(null);

    const { register, handleSubmit, reset } = useFormContext<{
        message: string;
    }>();

    const onsubmit = (data: { message: string }) => {
        if (!data.message.trim()) {
            toast.error("O campo de mensagem não pode estar vazio!");
            return;
        }

        setStateValue(data.message);
        setActiveButton(null);
        reset();
    };

    return (
        <div className="bg-black border rounded-2xl p-4 flex flex-col gap-2">
            <form
                onSubmit={handleSubmit(onsubmit)}
                className="flex justify-between gap-6"
            >
                <TextareaAutosize
                    minRows={1}
                    maxRows={6}
                    placeholder="Digite algo..."
                    autoFocus={false}
                    {...register("message")}
                    className="w-full resize-none  focus:outline-none bg-transparent scrollbar-hide"
                />
                <button
                    type="submit"
                    className="h-[40px] rounded-xl p-2 bg-foreground text-muted items-start "
                >
                    <ArrowUpLeft size={25} />
                </button>
            </form>
            <ChatCarrossel
                activeButton={activeButton}
                setActiveButton={setActiveButton}
            />
        </div>
    );
};
