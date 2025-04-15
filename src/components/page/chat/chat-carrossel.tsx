"use client";

import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";

const basePrompts = [
    { about: "Sobre o Carlos Danyel" },
    { about: "Ações Sociais" },
    { about: "Experiencias" },
    { about: "Projetos Desenvolvidos" },
    { about: "Certificados" },
    { about: "Stack Principal" },
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
        <div
            className={cn(
                "flex overflow-hidden max-w-[700px] group",
                "max-xl:max-w-[400px]"
            )}
        >
            <div
                className={cn(
                    "w-full flex gap-3 animate-infinite-scroll group-hover:animate-pause",
                    activeButton && "animate-pause"
                )}
            >
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
