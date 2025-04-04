"use client";

import { Persona } from "@/components/page/persona";
import { Sections } from "@/components/page/persona/sections";

export default function PersonaAI() {
    return (
        <Persona
            title="Seja Muito Bem-Vindo ( Portfólio )"
            description={
                <>
                    <span className="text-white">
                        Carlos Danyel Silva Teixeira
                    </span>
                    {""} Desenvolvedor Fullstack com foco em IA
                </>
            }
        >
            <Sections />
        </Persona>
    );
}
