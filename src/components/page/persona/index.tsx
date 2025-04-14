import { ContainerPage } from "./containerPage";
import { Sections } from "./sections";

export const PersonaPage = () => {
    return (
        <ContainerPage
            title="Seja Muito Bem-Vindo "
            scrollHide="hidden"
            description={
                <>
                    Portfólio de{" "}
                    <span className="text-white font-semibold">
                        Carlos Danyel Silva Teixeira
                    </span>
                    , Desenvolvedor Fullstack com foco em soluções com IA.
                    Criador da{" "}
                    <span className="text-white font-semibold">Persona IA</span>{" "}
                    e fundador da Modifyca. Aqui, ideias ganham forma, e
                    tecnologia vira solução.
                </>
            }
        >
            <Sections />
        </ContainerPage>
    );
};
