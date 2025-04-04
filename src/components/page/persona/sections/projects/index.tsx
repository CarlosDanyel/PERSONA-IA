import { projects } from "@/constants/projects";
import { CardProjects } from "./card-projects";
import { TextTitle } from "../../../../common/Text-title";
import { PAGE_PROJECTS } from "@/constants/page";
import { useState } from "react";
import { SECTION_PROJECT } from "@/constants/sections";
import { cn } from "@/lib/utils";

const VISIBLE_ITEMNS_QUANTITY = 2;

export const Projects = () => {
    const [visibleItemns, setVisibleItemns] = useState(VISIBLE_ITEMNS_QUANTITY);

    const handleToggleItemns = () => {
        setVisibleItemns((prev) =>
            prev === VISIBLE_ITEMNS_QUANTITY
                ? projects.length
                : VISIBLE_ITEMNS_QUANTITY
        );
    };

    return (
        <section id={SECTION_PROJECT} className="flex flex-col gap-6 mt-10">
            <div
                className={cn(
                    "flex justify-between items-center gap-3",
                    "max-sm:gap-10"
                )}
            >
                <TextTitle text="Projetos e Business com AI" />
                <div className="max-[900px]:hidden">
                    <span className="text-muted-foreground">Exibido:</span> 0
                    {visibleItemns}{" "}
                    <span className="text-muted-foreground">de</span> 0
                    {projects.length}
                </div>
                <div className="flex justify-items-end">
                    <button
                        onClick={handleToggleItemns}
                        className="ml-auto bg-sidebar border rounded-xl text-sm py-2 px-3 hover:border-white duration-700 whitespace-nowrap"
                    >
                        {visibleItemns === VISIBLE_ITEMNS_QUANTITY
                            ? "Ver Todos"
                            : "Ver Menos"}
                    </button>
                </div>
            </div>
            {projects.slice(0, visibleItemns).map((item) => (
                <CardProjects
                    key={item.id}
                    logo={item.details.icon}
                    href={`${PAGE_PROJECTS}/${item.id}`}
                    project={item}
                />
            ))}
        </section>
    );
};
