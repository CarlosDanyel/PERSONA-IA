import { cn } from "@/lib/utils";

type ButtonTechToolProps = {
    title: string;
    open: boolean;
    setOpen: (open: boolean) => void;
};
export const ButtonTechTool = ({
    title,
    open,
    setOpen,
}: ButtonTechToolProps) => {
    return (
        <button
            onClick={() => setOpen(!open)}
            className={cn(
                "text-sm border border-transparent px-2 py-2 rounded-[1rem]",
                open && "border-gray-300 bg-sidebar"
            )}
        >
            {open && "✦  "}
            {title}
        </button>
    );
};
