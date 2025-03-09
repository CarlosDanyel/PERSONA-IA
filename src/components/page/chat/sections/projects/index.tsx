import { CardProjects } from "./card-projects";

export const Projects = () => {
    return (
        <section className="flex flex-col gap-6 mt-10">
            <h2 className="font-title text-2xl font-medium normal-case tracking-[-1px]">
                Projetos e Soluções criadas com IA
            </h2>
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
