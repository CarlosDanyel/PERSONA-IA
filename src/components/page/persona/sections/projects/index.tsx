import { projects } from "@/constants/projects";
import { CardProjects } from "./card-projects";
import { TextTitle } from "./text-title";
import { PAGE_PROJECTS } from "@/constants/page";

export const Projects = () => {
    return (
        <section className="flex flex-col gap-6 mt-10">
            <TextTitle text="Projetos e Soluções criadas com IA" />
            {projects.map((item) => (
                <CardProjects
                    logo={item.details.icon}
                    key={item.id}
                    title={item.subTitle}
                    description={item.subDescription}
                    date={item.details.launch}
                    typeProject={item.details.type}
                    image={item.cardImage}
                    href={`${PAGE_PROJECTS}/${item.id}`}
                />
            ))}
        </section>
    );
};
