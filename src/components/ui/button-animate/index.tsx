import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

type ButtonAnimateProps = {
    name: string;
    icon?: "arrow";
    className?: string;
    status?: "Prod" | "Dev";
};
export const ButtonAnimate = ({
    name,
    icon,
    className,
    status = "Prod",
}: ButtonAnimateProps) => {
    return (
        <div className={cn("flex flex-col gap-1", className)}>
            <div className="text-sm font-semibold flex gap-2">
                {name}
                {icon && <ArrowRight size={20} className="animate-pulse" />}
            </div>
            <div
                className={cn(
                    "w-[130px] h-[1px] bg-white  transition-all duration-700",
                    icon && "w-[140px]",
                    status === "Prod" && "group-hover:w-full"
                )}
            ></div>
        </div>
    );
};
