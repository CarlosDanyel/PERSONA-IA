import { cn } from "@/lib/utils";

type CirclePulseProps = {
    color?: "green" | "white" | "red";
};

export const CirclePulse = ({ color }: CirclePulseProps) => {
    return (
        <div
            className={cn(
                "w-2 h-2 animate-pulse rounded-full",
                color === "green"
                    ? "bg-green-500"
                    : color === "red"
                    ? "bg-orange-500"
                    : "bg-white"
            )}
        />
    );
};
