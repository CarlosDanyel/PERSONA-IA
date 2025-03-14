import { CardProjects } from "./card-projects";
import { TextTitle } from "./text-title";

export const Projects = () => {
    return (
        <section className="flex flex-col gap-6 mt-10">
            <TextTitle text="Projetos e Soluções criadas com IA" />
            <CardProjects
                title="Modifyca | Criação de Currículos Profissionais"
                description="A Modifyca é a plataforma definitiva para quem deseja um currículo profissional, moderno e otimizado para o mercado de trabalho."
                date="Jan, 28, 2025"
                typeProject="PRODUCT"
                image="/assets/image-4.png"
            />
            <CardProjects
                title="Modifyca | Criação de Currículos Profissionais"
                description="A Modifyca é a plataforma definitiva para quem deseja um currículo profissional, moderno e otimizado para o mercado de trabalho."
                date="Jan, 28, 2025"
                typeProject="SASS"
                image="/assets/image-5.png"
            />
        </section>
    );
};
