import { PAGE_CHAT, PAGE_PERSONA, PAGE_PROJECTS } from "./page";
import { projects } from "./projects";

export const breadcrumbs = [
    {
        page: PAGE_PERSONA,
        breadcrumb: [{ label: "Home", url: "/" }, { label: "Persona" }],
    },
    {
        page: PAGE_CHAT,
        breadcrumb: [
            { label: "Home", url: "/" },
            { label: "Persona", url: "/persona/" },
            { label: "Chat" },
        ],
    },
    ...projects.map((project) => ({
        page: `${PAGE_PROJECTS}/${project.id}`,
        breadcrumb: [
            { label: "Home", url: "/" },
            { label: "Persona", url: "/persona" },
            { label: project.title },
        ],
    })),
];
