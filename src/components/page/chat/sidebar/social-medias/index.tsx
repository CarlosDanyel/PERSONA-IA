import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Medias } from "./medias";

export const SocialMedia = () => {
    return (
        <SidebarGroup className="pr-0 mt-auto">
            <SidebarGroupLabel className="text-sm pl-0 font-normal">
                Redes Sociais
            </SidebarGroupLabel>
            <SidebarGroupContent>
                <div
                    className={cn(
                        "text-xs w-full text-muted-foreground whitespace-nowrap text-start border overflow-hidden",
                        "transition-all px-2 py-2 ml-[-5px] rounded mt-1 ",
                        "flex justify-between items-center "
                    )}
                >
                    <Medias />
                </div>
            </SidebarGroupContent>
        </SidebarGroup>
    );
};
