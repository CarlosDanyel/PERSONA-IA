import { ChatContext } from "@/contexts/chat";
import { useContext } from "react";

export const useChat = () => {
    const context = useContext(ChatContext);

    if (!context) {
        throw new Error("useChat deve ser usado dentro de um ChatProvider");
    }

    return context;
};
