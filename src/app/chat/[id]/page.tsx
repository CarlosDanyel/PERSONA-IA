import { Chat } from "@/components/page/chat";
import { ContainerPage } from "@/components/page/persona/containerPage";

export default async function ChatID() {
    return (
        <ContainerPage
            title="Em que posso te ajudar?"
            description={
                <>
                    Sou a <span className="text-white"> Persona AI </span>
                    inteligência artificial do
                    <span className="text-white"> Carlos Danyel, </span>
                    sua representação digital. Estou aqui para te auxiliar e
                    otimizar sua experiência.
                </>
            }
        >
            <Chat />
        </ContainerPage>
    );
}
