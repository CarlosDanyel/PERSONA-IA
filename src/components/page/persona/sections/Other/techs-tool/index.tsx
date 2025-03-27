"use client";

import { useState } from "react";
import { ButtonTechTool } from "./button-tech";
import { TechToolsData } from "@/constants/techs-tools";
import { CustomSwiper } from "./casousel-techs";

export const TechsAndServices = () => {
    const [open, setOpen] = useState<
        "techs" | "tools" | "bank" | "cloud" | null
    >("techs");

    const toggleButton = (button: "techs" | "tools" | "bank" | "cloud") => {
        setOpen((prevState) => (prevState === button ? null : button));
    };

    const itemsToDisplay = {
        techs: TechToolsData[0]?.techs[0]?.main || [],
        tools: TechToolsData[0]?.tools || [],
        bank: TechToolsData[0]?.techs[0].banks || [],
        cloud: TechToolsData[0]?.techs[0].cloud || [],
    }[open || "techs"];

    const sectionTitle = {
        techs: "Tecnologias do Dia a Dia",
        tools: "Ferramentas Mais Usadas",
        bank: "Bancos de Dados",
        cloud: "Serviços de Cloud",
    }[open || "techs"];

    return (
        <div className="w-full h-fit p-6 border rounded-xl">
            <div className="flex flex-col gap-6">
                <div className="flex justify-between">
                    <h4 className="font-title text-[22px] font-medium normal-case tracking-[-1px]">
                        {sectionTitle}
                    </h4>
                    <div className="flex border rounded-[1rem]">
                        <ButtonTechTool
                            open={open === "techs"}
                            setOpen={() => toggleButton("techs")}
                            title="Tecnologias"
                        />
                        <ButtonTechTool
                            open={open === "bank"}
                            setOpen={() => toggleButton("bank")}
                            title="Banco de Dados"
                        />
                        <ButtonTechTool
                            open={open === "cloud"}
                            setOpen={() => toggleButton("cloud")}
                            title="Cloud"
                        />
                        <ButtonTechTool
                            open={open === "tools"}
                            setOpen={() => toggleButton("tools")}
                            title="Ferramentas"
                        />
                    </div>
                </div>
                <CustomSwiper items={itemsToDisplay} />
            </div>
        </div>
    );
};
