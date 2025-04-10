type UserMessageProps = {
  text: string;
};

import Chat from "@/assets/chat.svg";

export const UserMessage = ({ text }: UserMessageProps) => {
  return (
    <div className="relative w-full flex justify-end">
      <Chat className="absolute w-5 h-5 right-[-9px] bottom-[2px]" />
      <span className="bg-muted leading-[26px] text-sm  px-4 py-2 rounded-2xl max-w-[700px]">
        {text}
      </span>
    </div>
  );
};
