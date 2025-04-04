"use client";

import { useState } from "react";

import { TechToolsData } from "@/constants/techs-tools";
import { ButtonTechTool } from "./button-tech";
import { CustomSwiper } from "./casousel-tech";
import { cn } from "@/lib/utils";
import { Cloudy, Cpu, Hammer, Landmark } from "lucide-react";

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
        <div className="w-full h-fit p-6 overflow-hidden">
            <div className="flex flex-col gap-12">
                <div
                    className={cn(
                        "flex justify-between flex-wrap gap-3",
                        "max-[1506px]:flex-col"
                    )}
                >
                    <h4 className="font-title text-[22px] font-medium normal-case tracking-[-1px]">
                        {sectionTitle}
                    </h4>
                    <div className="flex border rounded-[1rem] w-fit">
                        <ButtonTechTool
                            open={open === "techs"}
                            setOpen={() => toggleButton("techs")}
                            title="Tecnologias"
                            icon={Cpu}
                        />
                        <ButtonTechTool
                            open={open === "bank"}
                            setOpen={() => toggleButton("bank")}
                            title="Banco de Dados"
                            icon={Landmark}
                        />
                        <ButtonTechTool
                            open={open === "cloud"}
                            setOpen={() => toggleButton("cloud")}
                            title="Cloud"
                            icon={Cloudy}
                        />
                        <ButtonTechTool
                            open={open === "tools"}
                            setOpen={() => toggleButton("tools")}
                            title="Ferramentas"
                            icon={Hammer}
                        />
                    </div>
                </div>
                <CustomSwiper items={itemsToDisplay} />
            </div>
        </div>
    );
};
