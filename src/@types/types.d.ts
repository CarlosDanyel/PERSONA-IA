type Message = {
    id: string;
    content: string;
    createdAt: string;
};

type Chat = {
    id: string;
    messages: Message[];
    createdAt: string;
};
