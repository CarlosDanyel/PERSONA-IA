"use client";

import { ArrowRight } from "lucide-react";
import { CirclePulse } from "../projects/circle-pulse";
import { TextTitle } from "../../../../common/Text-title";
import { cn } from "@/lib/utils";
import { Medias } from "../../sidebar/social-medias/medias";

import Link from "next/link";
import {
    SECTION_CONTACT,
    SECTION_NETWORKING,
    SECTION_TOOLS,
    WHATSAPP_MEETING,
} from "@/constants/sections";
import { useClock } from "@/hooks/useClock";
import { TechsAndServices } from "./other-find";

export const Others = () => {
    const time = useClock();

    return (
        <section id={SECTION_CONTACT} className="w-full mt-20 gap-2 flex">
            <div className=" w-full flex flex-col gap-6">
                <TextTitle text="Tecnologias, Ferramentas e Redes" />
                <div
                    id={SECTION_CONTACT}
                    className={cn("flex gap-5", "max-[1075px]:flex-col")}
                >
                    <div className="group flex-1 basis-72 p-7 border rounded-xl  flex flex-col gap-3 pointer">
                        <span className="px-4 py-2 border rounded-3xl flex items-center gap-2 w-fit text-sm">
                            <CirclePulse color="white" />
                            Entre em Contato
                        </span>
                        <div className=" h-full flex flex-col justify-between cursor-">
                            <p className="font-title text-[28px] font-medium normal-case tracking-[-1px]">
                                Agende uma <br /> Reunião ✦
                            </p>
                            <Link
                                href={WHATSAPP_MEETING}
                                target="_blank"
                                className={cn(
                                    "w-full bg-transparent font-title text-lg font-medium normal-case transition-all group-hover:border-white duration-700",
                                    "flex gap-2 items-center justify-center border rounded-3xl py-2 mt-32"
                                )}
                            >
                                Contato <ArrowRight size={19} />
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1 basis-[65%] overflow-hidden">
                        <div
                            id={SECTION_TOOLS}
                            className="w-full h-fit border rounded-xl overflow-hidden"
                        >
                            <TechsAndServices />
                        </div>
                        <div
                            className={cn(
                                "flex gap-4 w-full mt-12",
                                "max-sm:flex-col"
                            )}
                        >
                            <div
                                id={SECTION_NETWORKING}
                                className="flex gap-3 w-full"
                            >
                                <Medias session="other" />
                            </div>
                            <div
                                className={cn(
                                    "w-full border rounded-xl bg-sidebar flex flex-col gap-2 px-4",
                                    "justify-center items-center",
                                    "max-sm:py-4"
                                )}
                            >
                                <span
                                    className={cn(
                                        "font-title text-3xl font-medium normal-case tracking-[-1px] whitespace-nowrap",
                                        "max-xl:text-xl"
                                    )}
                                >
                                    {time} H
                                </span>
                                <span className="font-light text-sm text-zinc-300">
                                    São Paulo, SP
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
