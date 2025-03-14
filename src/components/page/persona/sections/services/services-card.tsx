import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { Icon as PhosphorIcon } from "phosphor-react";

type ServicesCardProps = {
    title: string;
    icon: LucideIcon | PhosphorIcon;
};

export const ServicesCard = ({ icon: Icon, title }: ServicesCardProps) => {
    return (
        <div
            className={cn(
                "flex justify-center items-center flex-col w-full h-full border rounded-xl bg-sidebar",
                "gap-4 font-medium cursor-pointer bg-transparent transition-all duration-700",
                "hover:bg-sidebar"
            )}
        >
            <Icon size={36} color="#ffffff" weight="fill" />
            {title}
        </div>
    );
};
