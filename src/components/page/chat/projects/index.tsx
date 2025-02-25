import { CardProjects } from "./card-projects";

export const Projects = () => {
    return (
        <section className="flex flex-col mt-24 ">
            <h2 className="font-title text-[22px] font-semibold normal-case leading-[76px] tracking-[1px]">
                Projetos
            </h2>
            <div className="flex gap-3 w-full">
                <CardProjects />
                <CardProjects />
            </div>
        </section>
    );
};
