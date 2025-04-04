import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type AIMessageProps = {
    text: string;
};
export const AIMessage = ({ text }: AIMessageProps) => {
    return (
        <div className="max-w-[900px] leading-[26px] my-9 text-left flex items-center gap-5">
            <Avatar>
                <AvatarImage src="" />
                <AvatarFallback>PS</AvatarFallback>
            </Avatar>
            <span>{text}</span>
        </div>
    );
};
