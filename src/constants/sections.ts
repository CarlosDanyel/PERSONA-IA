import {
    BriefcaseBusiness,
    CircleUser,
    Component,
    Cpu,
    Hammer,
    Layers,
    LucideIcon,
    Share2,
} from "lucide-react";

type SidebarLinkProps = {
    label: string;
    icon: LucideIcon;
    to?: string;
}[];

export const SECTION_HOME = "Home";
export const SECTION_PROJECT = "Project";
export const SECTION_EXPERIENCE = "Experience";
export const SECTION_TECHNOLOGIES = "Technology";
export const SECTION_TECH = "Tech";
export const SECTION_TOOLS = "Tools";
export const SECTION_NETWORKING = "Networking";
export const SECTION_CONTACT = "Contact";

export const WHATSAPP_MEETING = "https://bit.ly/3Y9gARO";

export const linksPageDirectTo: SidebarLinkProps = [
    {
        label: "Home",
        icon: Component,
        to: SECTION_HOME,
    },
    {
        label: "Projetos e Negócios",
        icon: BriefcaseBusiness,
        to: SECTION_PROJECT,
    },
    {
        label: "Experiencia",
        icon: Layers,
        to: SECTION_EXPERIENCE,
    },
    {
        label: "Tecnologias",
        icon: Cpu,
        to: SECTION_TOOLS,
    },
    {
        label: "Ferrametas",
        to: SECTION_TOOLS,
        icon: Hammer,
    },
    {
        label: "Redes Sociais",
        to: SECTION_NETWORKING,
        icon: Share2,
    },
    {
        label: "Contato",
        to: SECTION_CONTACT,
        icon: CircleUser,
    },
];
