import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

type ButtonAnimateProps = {
    name: string;
    icon?: "arrow";
};
export const ButtonAnimate = ({ name, icon }: ButtonAnimateProps) => {
    return (
        <div className="flex flex-col gap-1">
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
