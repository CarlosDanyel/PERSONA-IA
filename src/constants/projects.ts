import LogoModifyca from "@/assets/modifycaLogo.svg";
import LogoPersona from "@/assets/logoPersona.svg";

export const projects: Project[] = [
    {
        id: 1,
        title: "Modifyca",
        subTitle: "Modifyca | Criação de Currículos Profissionais",
        description: `A Modifyca é uma plataforma revolucionária que utiliza o
                    poder da inteligência artificial para transformar a forma
                    como profissionais criam seus currículos. Desenvolvida com o
                    objetivo de proporcionar uma experiência rápida, eficiente e
                    estratégica, a Modifyca se destaca como uma solução
                    inovadora para aqueles que desejam se destacar no mercado de
                    trabalho.`,
        subDescription:
            "A Modifyca é a plataforma definitiva para quem deseja um currículo profissional, moderno e otimizado para o mercado de trabalho.",

        details: {
            launch: "Jan, 28, 2025",
            type: "SASS",
            icon: LogoModifyca,
            status: "Prod",
            targets:
                "210 usuários e 120 currículos baixados em seu primeiro mês de lançamento.",
            tech: [
                {
                    icon: "Javascript",
                    label: "Javascript",
                },
            ],
            href: "https://modifyca.com",
            repository: "https://github.com/CarlosDanyel/Modifyca",
        },
        cardImage: "/assets/image-4.png",
        images: [
            "/assets/modifyca-1.png",
            "/assets/modifyca-2.png",
            "/assets/modifyca-3.png",
        ],
    },
    {
        id: 2,
        title: "Persona AI",
        subTitle: "Persona AI | Sua Representação Digital Inteligente",
        description:
            "A Persona AI é uma representação digital inteligente que eleva sua apresentação profissional a outro nível. Projetada para ser o primeiro ponto de contato com quem deseja conhecer seu trabalho, essa assistente virtual combina tecnologia e personalização para destacar suas habilidades, projetos e conquistas de forma clara e envolvente.",
        subDescription:
            "Sua representação digital inteligente. Personalizável, interativa e feita para representar você com precisão e impacto.",
        details: {
            launch: "Jan, 28, 2025",
            type: "AGENT AI",
            status: "Prod",
            targets: "Lançada e desenvolvida em tempo record - ( 2 meses )",
            icon: LogoPersona,
            tech: [
                {
                    icon: "Javascript",
                    label: "Javascript",
                },
            ],

            repository: "https://github.com/CarlosDanyel/Modifyca",
        },
        cardImage: "/assets/image-5.png",
        images: [
            "/assets/persona-1.png",
            "/assets/persona-2.png",
            "/assets/persona-3.png",
        ],
    },
    {
        id: 3,
        title: "VYRAL ",
        subTitle: "VYRAL | Seu Radar de Conteúdos Virais na Internet",
        description:
            "O Tery é um agente de inteligência artificial projetado para encontrar e filtrar os conteúdos mais virais da internet. Com algoritmos avançados de análise e curadoria, ele identifica tendências emergentes e entrega os melhores resultados em tempo real, ajudando criadores, empresas e entusiastas a se manterem sempre à frente.",
        subDescription:
            "Descubra o que está em alta antes de todo mundo. O Tery analisa milhões de fontes para trazer os conteúdos mais relevantes e engajadores do momento.",
        details: {
            launch: "Em breve",
            type: "PRODUCT",
            status: "Dev",
            targets:
                "A solução definitiva para quem quer acompanhar tendências e viralizar na internet.",
            tech: [
                {
                    icon: "Next.js",
                    label: "Next.js",
                },
                {
                    icon: "TypeScript",
                    label: "TypeScript",
                },
                {
                    icon: "AI",
                    label: "Inteligência Artificial",
                },
            ],
            repository: "https://github.com/CarlosDanyel/Tery",
        },
        cardImage: "/assets/image-7.png",
    },
];
