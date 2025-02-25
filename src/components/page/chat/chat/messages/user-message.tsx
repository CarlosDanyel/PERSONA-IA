type UserMessageProps = {
    text: string;
};

export const UserMessage = ({ text }: UserMessageProps) => {
    return (
        <div className=" w-full flex justify-end">
            <span className="bg-muted px-4 py-2 rounded-2xl"> {text}</span>
        </div>
    );
};
