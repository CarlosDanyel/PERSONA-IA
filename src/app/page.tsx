import { PersonaPage } from "@/components/page/persona";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfólio | Carlos Danyel",
    description:
        "Explore o portfólio de Carlos Danyel Silva Teixeira, Desenvolvedor Fullstack com foco em Inteligência Artificial. Fundador da Modifyca e criador da Persona IA. Tecnologia com propósito, impacto e inovação.",
    keywords: [
        "Portfólio",
        "Carlos Danyel Silva Teixeira",
        "Desenvolvedor Fullstack",
        "Fullstack Developer",
        "Inteligência Artificial",
        "IA",
        "Modifyca",
        "Persona IA",
    ],
    openGraph: {
        title: "Portfólio | Carlos Danyel",
        description:
            "Carlos Danyel é Desenvolvedor Fullstack com foco em IA, fundador da plataforma Modifyca e criador da Persona IA. Conheça seu portfólio e descubra como ele transforma tecnologia em soluções de verdade.",
        url: "https://carlosdanyelz.com",
        siteName: "Modifyca",
        images: [
            {
                url: "https://carlosdanyelz.com/opengraph-image.png",
                width: 1200,
                height: 630,
                alt: "Modifyca - Plataforma de criação de currículos com IA",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Portfólio | Carlos Danyel",
        description:
            "Desenvolvedor Fullstack com foco em Inteligência Artificial. Criador da Modifyca e da Persona IA. Inovação, estratégia e tecnologia unidas para transformar ideias em impacto real.",
        images: ["https://carlosdanyelz.com/twitter-image.png"],
    },
};

export default function PersonaAI() {
    return <PersonaPage />;
}
