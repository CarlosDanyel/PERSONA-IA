import { cn } from "@/lib/utils";

export const Footer = () => {
    return (
        <footer
            className={cn(
                "h-10 mt-5 w-full flex justify-between gap-5 items-start",
                "max-md:flex-col"
            )}
        >
            <span className="text-muted-foreground">
                <span className="text-white">Persona AI</span> - Carlos Danyel
                Silva Teixeira
            </span>
            <span
                className={cn("text-muted-foreground text-right", "text-start")}
            >
                Copyright © 2025{" "}
                <span className="text-white">carlosdanyel.com</span> Todos os
                direitos reservados.
            </span>
        </footer>
    );
};
