import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const WaitingList = () => {
    return (
        <SidebarGroup className="pr-0 mt-auto">
            <SidebarGroupLabel className="text-sm pl-0 font-normal">
                Lista de Espera
            </SidebarGroupLabel>
            <SidebarGroupContent>
                <Link
                    href={"/"}
                    className={cn(
                        "text-sm w-full text-muted-foreground whitespace-nowrap text-start border overflow-hidden",
                        "transition-all px-2 py-2 ml-[-5px] rounded mt-1 ",
                        "flex justify-between items-center hover:bg-muted hover:text-white"
                    )}
                >
                    <span className="flex gap-2 items-center">
                        Acesso a Persona AI <ArrowRight size={18} />
                    </span>
                </Link>
            </SidebarGroupContent>
        </SidebarGroup>
    );
};
