import { Tooltip } from "@/components/ui/tooltip";
import {
    BriefcaseBusiness,
    CircleUser,
    Component,
    Cpu,
    FolderKanban,
    Hammer,
    Layers,
    LucideIcon,
    Share2,
} from "lucide-react";
import Link from "next/link";

type SidebarLinkProps = {
    label: string;
    icon: LucideIcon;
    url: string;
}[];

const linksPageDirectTo: SidebarLinkProps = [
    {
        label: "Home",
        icon: Component,
        url: "/",
    },
    {
        label: "Projetos",
        icon: FolderKanban,
        url: "/chat",
    },
    {
        label: "Serviços",
        icon: Layers,
        url: "/chat",
    },
    {
        label: "Tecnologias",
        icon: Cpu,
        url: "/chat",
    },
    {
        label: "Negócios",
        icon: BriefcaseBusiness,
        url: "/chat",
    },
    {
        label: "Ferrametas",
        icon: Hammer,
        url: "/chat",
    },
    {
        label: "Redes Sociais",
        icon: Share2,
        url: "/chat",
    },
    {
        label: "Contato",
        icon: CircleUser,
        url: "/chat",
    },
];

export const SidebarLink = () => {
    return (
        <div className="h-screen w-fit bg-sidebar border flex flex-col items-center justify-between px-3">
            <div></div>
            <div className="flex flex-col gap-6 text-muted-foreground">
                {linksPageDirectTo.map((item, index) => (
                    <Tooltip
                        key={`${item.label}-${index}`}
                        content={item.label}
                        className="mr-5  rounded-xl"
                    >
                        <Link
                            className="hover:text-white transition-all"
                            href={item.url}
                        >
                            <item.icon size={18} />
                        </Link>
                    </Tooltip>
                ))}
            </div>
            <div></div>
        </div>
    );
};
