import { useIsMobile } from "@/hooks/use-isMobile";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

type ButtonTechToolProps = {
    title: string;
    open: boolean;
    setOpen: (open: boolean) => void;
    icon?: LucideIcon;
};
export const ButtonTechTool = ({
    title,
    open,
    icon: Icon,
    setOpen,
}: ButtonTechToolProps) => {
    const isMobile = useIsMobile(800);
    return (
        <button
            onClick={() => setOpen(!open)}
            className={cn(
                "text-sm border border-transparent px-2 py-2 rounded-[1rem] ",
                open && "border-gray-300 bg-sidebar"
            )}
        >
            {isMobile ? (
                Icon ? (
                    <Icon size={18} />
                ) : null
            ) : (
                <>
                    {open && "✦ "}
                    {title}
                </>
            )}
        </button>
    );
};
