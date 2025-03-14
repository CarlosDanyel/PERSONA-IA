type TextTitleProps = {
    text: string;
};

export const TextTitle = ({ text }: TextTitleProps) => {
    return (
        <h2 className="font-title text-2xl font-medium normal-case tracking-[-1px]">
            {text}
        </h2>
    );
};
