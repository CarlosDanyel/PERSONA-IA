"use client";

import { Persona } from "@/components/page/persona";
import { Sections } from "@/components/page/persona/sections";

export default function PersonaAI() {
    return (
        <Persona
            title="Seja Muito Bem-Vindo "
            description={
                <>
                    Portfólio do
                    <span className="text-white">
                        Carlos Danyel Silva Teixeira
                    </span>
                    {""} Desenvolvedor Fullstack com foco em IA, criador da{" "}
                    <span className="text-white">Persona IA</span>
                </>
            }
        >
            <Sections />
        </Persona>
    );
}
