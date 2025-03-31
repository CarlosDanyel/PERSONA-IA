import { projects } from "@/constants/projects";
import { CardProjects } from "./card-projects";
import { TextTitle } from "../../../../common/Text-title";
import { PAGE_PROJECTS } from "@/constants/page";
import { useState } from "react";

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
        <section className="flex flex-col gap-6 mt-10">
            <div className="flex justify-between">
                <TextTitle text="Projetos e Business com AI" />

                <button
                    onClick={handleToggleItemns}
                    className="bg-sidebar border rounded-xl text-sm py-2 px-3 hover:border-white duration-700"
                >
                    {visibleItemns === VISIBLE_ITEMNS_QUANTITY
                        ? "Ver Todos"
                        : "Ver Menos"}
                </button>
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
