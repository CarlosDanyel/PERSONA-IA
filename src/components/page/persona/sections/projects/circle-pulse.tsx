import { cn } from "@/lib/utils";

type CirclePulseProps = {
    color?: "green" | "white";
};

export const CirclePulse = ({ color }: CirclePulseProps) => {
    return (
        <div
            className={cn(
                "w-2 h-2 animate-pulse rounded-full",
                color === "green" ? "bg-green-500" : "bg-white"
            )}
        />
    );
};
