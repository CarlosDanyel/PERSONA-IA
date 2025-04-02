import { Mail, PhoneCall } from "lucide-react";
import { GithubLogo, LinkedinLogo } from "phosphor-react";

type Media = {
    name: string;
    link?: string;
    icon: React.ElementType;
};

export const medias: Media[] = [
    {
        name: "Linkedin",
        link: "https://www.linkedin.com/in/carlosdanyelsilvateixeira",
        icon: LinkedinLogo,
    },
    {
        name: "Github",
        link: "https://github.com/CarlosDanyel",
        icon: GithubLogo,
    },
    {
        name: "carlosdanyel@gmail.com",
        link: "mailto:carlosdanyelsilva27@gmail.com?subject=Contato&body=Olá, Carlos!",
        icon: Mail,
    },
    {
        name: "55+ (11)985673241",
        link: "tel:+5511985673241",
        icon: PhoneCall,
    },
];
