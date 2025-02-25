// @flow
import { Button, buttonVariants } from "@/components/ui/button";
import { VariantProps } from "class-variance-authority";
import { ArrowRight } from "lucide-react";
import * as React from "react";
type ButtonCloseChatProps = {
    close: boolean;
    setClose: (close: boolean) => void;
    variant: VariantProps<typeof buttonVariants>["variant"];
    className: string;
};
export const ButtonCloseChat = ({
    close,
    setClose,
    variant,
    className,
}: ButtonCloseChatProps) => {
    return (
        <Button
            className={className}
            variant={variant}
            onClick={() => setClose(!close)}
        >
            {!close ? "Ir para o chat" : "Sair do chat"}
            <ArrowRight />
        </Button>
    );
};
