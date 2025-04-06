import {
    PAGE_CHAT,
    PAGE_PERSONA,
    PAGE_PROJECTS,
    PAGE_WAITING_LIST,
} from "./page";
import { projects } from "./projects";

export const breadcrumbs = [
    {
        page: PAGE_PERSONA,
        breadcrumb: [{ label: "Persona" }],
    },
    {
        page: PAGE_CHAT,
        breadcrumb: [{ label: "Persona", url: "/" }, { label: "Chat" }],
    },
    {
        page: PAGE_WAITING_LIST,
        breadcrumb: [
            { label: "Persona", url: "/" },
            { label: "Lista de Espera" },
        ],
    },
    ...projects.map((project) => ({
        page: `${PAGE_PROJECTS}/${project.id}`,
        breadcrumb: [{ label: "Persona", url: "/" }, { label: project.title }],
    })),
];
