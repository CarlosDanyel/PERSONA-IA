import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

type AIMessageProps = {
    text?: string;
    type?: "loading" | "render";
};

export const AIMessage = ({ text, type = "render" }: AIMessageProps) => {
    return (
        <div className="max-w-[900px] leading-[26px] my-9 text-left flex items-center gap-5">
            <div className="h-full mb-auto">
                <Avatar className=" flex items-start">
                    <AvatarImage src="" />
                    <AvatarFallback>PS</AvatarFallback>
                </Avatar>
            </div>
            {type === "loading" ? (
                <div className="flex flex-col gap-2 w-full max-w-[500px]">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-4 w-2/3" />
                </div>
            ) : (
                <span dangerouslySetInnerHTML={{ __html: text || "" }} />
            )}
        </div>
    );
};
