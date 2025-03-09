"use client";

import { useState } from "react";
import { ChatArea } from "./chat/chat-area";
import { useForm, FormProvider } from "react-hook-form";
import { Sections } from "./sections";

export const ChatPage = () => {
    const methods = useForm();
    const [stateValue, setStateValue] = useState("");

    return (
        <>
            <FormProvider {...methods}>
                <div className="h-full flex flex-col justify-between">
                    <div className="overflow-y-auto scrollbar-hide h-full flex flex-col justify-between my-7">
                        <section className="h-fit flex flex-col justify-start">
                            <div className="mt-7">
                                <h1 className="font-title text-[35px] font-medium normal-case leading-[76px] tracking-[-1px] text-start text-glow">
                                    Seja Muito Bem Vindo á Persona AI
                                </h1>
                                <p className="font-title text-base text-[#7E7E7E] font-medium text-start">
                                    Sou uma inteligencia aritificial criado por
                                    Carlos Danyel e tambem sua assistente
                                    pessoal!
                                </p>
                            </div>
                        </section>
                        <Sections />
                    </div>
                    <ChatArea setStateValue={setStateValue} />
                </div>
            </FormProvider>
        </>
    );
};
