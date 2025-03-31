import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

type ButtonAnimateProps = {
    name: string;
    icon?: "arrow";
    className?: string;
};
export const ButtonAnimate = ({
    name,
    icon,
    className,
}: ButtonAnimateProps) => {
    return (
        <div className={cn("flex flex-col gap-1", className)}>
            <div className="text-sm font-semibold flex gap-2">
                {name}
                {icon && <ArrowRight size={20} className="animate-pulse" />}
            </div>
            <div
                className={cn(
                    "w-[130px] h-[1px] bg-white group-hover:w-full transition-all duration-700",
                    icon && "w-[140px]"
                )}
            ></div>
        </div>
    );
};
