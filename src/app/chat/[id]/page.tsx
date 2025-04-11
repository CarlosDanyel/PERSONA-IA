import { Chat } from "@/components/page/chat";
import { Persona } from "@/components/page/persona";

export default async function ChatID() {
    return (
        <Persona
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
        </Persona>
    );
}
