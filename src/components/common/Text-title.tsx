import { cn } from "@/lib/utils";

type TextTitleProps = {
    text: string;
};

export const TextTitle = ({ text }: TextTitleProps) => {
    return (
        <h2
            className={cn(
                "font-title text-2xl font-medium normal-case tracking-[-1px]",
                "max-sm:text-xl"
            )}
        >
            {text}
        </h2>
    );
};
