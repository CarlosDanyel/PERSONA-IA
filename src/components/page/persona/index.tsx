"use client";

import { ReactNode } from "react";
import { ChatArea } from "../chat/chat-area";
import { useForm, FormProvider } from "react-hook-form";
import { cn } from "@/lib/utils";
import { BackPage } from "@/components/ui/BackPage";
import { usePathname } from "next/navigation";
import { PAGE_CHAT } from "@/constants/page";

type PersonaProps = {
    title: string;
    description: ReactNode;
    children: ReactNode;
    className?: string;
};

export const Persona = ({
    children,
    description,
    title,
    className,
}: PersonaProps) => {
    const methods = useForm();
    const pathname = usePathname();

    const isPagePersona = pathname.includes(PAGE_CHAT);

    return (
        <>
            <FormProvider {...methods}>
                <div
                    className={cn(
                        "h-full flex flex-col justify-between overflow-hidden",
                        className
                    )}
                >
                    <div className="overflow-y-auto scrollbar-hide h-full flex flex-col justify-between my-7">
                        <section className="h-fit flex flex-col justify-start">
                            {isPagePersona && <BackPage className="mt-6" />}
                            <div
                                className={cn(isPagePersona ? "mt-0" : "mt-4")}
                            >
                                <h1 className="font-title text-[35px] font-medium normal-case leading-[76px] tracking-[-1px] text-start text-glow">
                                    {title}
                                </h1>
                                <p className="font-title text-base text-[#7E7E7E] font-medium text-start">
                                    {description}
                                </p>
                            </div>
                        </section>
                        {children}
                    </div>
                    <ChatArea />
                </div>
            </FormProvider>
        </>
    );
};
