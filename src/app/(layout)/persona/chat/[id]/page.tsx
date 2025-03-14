"use client";

import { Chat } from "@/components/page/chat";
import { Persona } from "@/components/page/persona";

export default function ChatID() {
    return (
        <Persona
            title=" Seja Muito Bem Vindo á Persona AI"
            description={
                <>
                    {" "}
                    <span className="text-white">Carlos Danyel</span> e tambem
                    sua assistente pessoal!
                </>
            }
        >
            <Chat />
        </Persona>
    );
}
