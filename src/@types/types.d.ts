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

type Tech = {
    icon: string;
    label: string;
};

type Detail = {
    launch: string;
    tech: Tech[];
    type: "SASS" | "AGENT AI" | "AI" | "PRODUCT";
    repository: string;
    targets: string;
    href?: string;
};

type Project = {
    id: uuid;
    title: string;
    subTitle: string;
    description: string;
    subDescription: string;
    details: Detail;
    cardImage: string;
    images: string[];
};
