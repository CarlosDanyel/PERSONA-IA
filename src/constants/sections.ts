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
export const SECTION_OTHER = "Other";

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
        to: SECTION_OTHER,
    },
    {
        label: "Ferrametas",
        to: SECTION_OTHER,
        icon: Hammer,
    },
    {
        label: "Redes Sociais",
        to: SECTION_OTHER,
        icon: Share2,
    },
    {
        label: "Contato",
        to: SECTION_OTHER,
        icon: CircleUser,
    },
];
