"use client";

import { useState } from "react";
import { ChatArea } from "./chat/chat-area";
import { useForm, FormProvider } from "react-hook-form";
import { ClientChat } from "./chat/messages";
import { ButtonCloseChat } from "./chat/button-close-chat";

export const ChatPage = () => {
    const methods = useForm();
    const [stateValue, setStateValue] = useState("");
    const [open, setOpen] = useState(false);

    return (
        <>
            <FormProvider {...methods}>
                <div className="h-full flex flex-col justify-between overflow-hidden">
                    {stateValue ? (
                        <section className="h-full flex flex-col justify-center">
                            <div className="mt-20">
                                <ButtonCloseChat
                                    close={open}
                                    setClose={setOpen}
                                    variant={"outline"}
                                    className="rounded-xl"
                                />
                                <h1 className="font-title text-[35px] font-medium normal-case leading-[76px] tracking-[1px] text-start text-glow">
                                    Seja Muito Bem Vindo á Persona AI
                                </h1>
                                <p className="font-title text-base text-[#7E7E7E] font-medium text-start">
                                    Sou uma inteligencia aritificial criado por
                                    Carlos Danyel e tambem sua assistente
                                    pessoal!
                                </p>
                            </div>
                            <ClientChat message={stateValue} />
                        </section>
                    ) : (
                        <section className="h-full">
                            <div className="mt-24">
                                <ButtonCloseChat
                                    close={open}
                                    setClose={setOpen}
                                    variant={"outline"}
                                    className="rounded-xl"
                                />
                                <h1 className="font-title text-[35px] font-medium normal-case leading-[76px] tracking-[1px] text-start text-glow">
                                    Seja Muito Bem Vindo á Persona AI
                                </h1>
                                <p className="font-title text-base text-[#7E7E7E] font-medium text-start">
                                    Sou uma inteligencia aritificial criado por
                                    Carlos Danyel e tambem sua assistente
                                    pessoal!
                                </p>
                            </div>
                        </section>
                    )}
                    <ChatArea setStateValue={setStateValue} />
                </div>
            </FormProvider>
        </>
    );
};
