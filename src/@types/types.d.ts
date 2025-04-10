type Message = {
  id: string;
  content?: string; 
  response?: string; 
  createdAt: string;
  role: "user" | "agent";
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
  status: "Prod" | "Dev";
  repository: string;
  targets: string;
  href?: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
};

type Project = {
  id: uuid;
  title: string;
  subTitle: string;
  description: string;
  subDescription: string;
  details: Detail;
  cardImage: string;
  images?: string[];
};

type TechToolItem = {
  label: string;
  icon: IconType;
};

type TechTools = {
  techs: {
    main: TechToolItem[];
    cloud: TechToolItem[];
    banks: TechToolItem[];
  }[];
  tools: TechToolItem[];
};
