"use client";

import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";

const basePrompts = [
    {
        about: "Quero Conhecer o Carlos",
    },
    {
        about: "Trabalhos",
    },
    {
        about: "Experiencia",
    },
    {
        about: "Como ele trabalha",
    },
    {
        about: "Certificados",
    },
    {
        about: "Currículo",
    },
];

type ChatCarrosselProps = {
    activeButton: string | null;
    setActiveButton: (value: string | null) => void;
};

export const ChatCarrossel = ({
    activeButton,
    setActiveButton,
}: ChatCarrosselProps) => {
    const { setValue } = useFormContext<{ message: string }>();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const value = e.currentTarget.value;

        setActiveButton(value === activeButton ? null : value);
        setValue("message", value);
    };

    return (
        <div className="flex overflow-hidden w-[700px] ">
            <div className="w-full flex gap-3 animate-infinite-scroll ">
                {[...basePrompts, ...basePrompts].map((item, index) => (
                    <button
                        key={`btn-${index}`}
                        value={item.about}
                        onClick={handleClick}
                        className={cn(
                            "w-fit text-sm bg-inherit border rounded-xl py-1 px-3 text-muted-foreground whitespace-nowrap transition-all",
                            "hover:border-foreground hover:text-foreground",
                            activeButton == item.about &&
                                "text-foreground border-foreground"
                        )}
                    >
                        {item.about}
                    </button>
                ))}
            </div>
        </div>
    );
};
