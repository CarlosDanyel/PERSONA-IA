import { RiJavaLine } from "react-icons/ri";
import { SiSpringboot } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { BiLogoVisualStudio } from "react-icons/bi";
import { SiPostman } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { FaFigma } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { SiAndroidstudio } from "react-icons/si";
import { PiMicrosoftTeamsLogo } from "react-icons/pi";
import { FiGitlab } from "react-icons/fi";
import { SiXcode } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaAws } from "react-icons/fa";

export const TechToolsData: TechTools[] = [
    {
        techs: [
            {
                main: [
                    { label: "Java", icon: RiJavaLine },
                    { label: "Spring Boot", icon: SiSpringboot },
                    { label: "NextJs", icon: SiNextdotjs },
                    { label: "Typescript", icon: SiTypescript },
                    { label: "React", icon: SiReact },
                    { label: "React Native", icon: TbBrandReactNative },
                ],
                cloud: [{ label: "AWS", icon: FaAws }],
                banks: [
                    { label: "PostgreSQL", icon: SiPostgresql },
                    { label: "MySQL", icon: GrMysql },
                    { label: "MongoDB", icon: SiMongodb },
                    { label: "Redis", icon: DiRedis },
                ],
            },
        ],
        tools: [
            {
                label: "Visual Studio Code",
                icon: BiLogoVisualStudio,
            },
            {
                label: "Android Studio",
                icon: SiAndroidstudio,
            },
            {
                label: "xCode",
                icon: SiXcode,
            },
            {
                label: "Azure DevOps",
                icon: VscAzure,
            },
            {
                label: "GitLab",
                icon: FiGitlab,
            },
            {
                label: "Postman",
                icon: SiPostman,
            },

            {
                label: "Figma",
                icon: FaFigma,
            },
            {
                label: "Github",
                icon: FaGithubAlt,
            },

            {
                label: "Teams",
                icon: PiMicrosoftTeamsLogo,
            },
        ],
    },
];
