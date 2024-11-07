import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoVue } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaJsSquare } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { FaPhp } from "react-icons/fa";
import { FaFigma } from "react-icons/fa6";

const skillsSharedData = [
    { id: 1, label: "HTML", icon: <FaHtml5 className="text-white transition-all duration-300 group-hover:text-orange-400 size-[50px] group-hover:size-[60px]" /> },
    { id: 2, label: "CSS", icon: <FaCss3Alt className="text-white transition-all duration-300 group-hover:text-blue-400 size-[50px] group-hover:size-[60px]" /> },
    { id: 3, label: "Javascript", icon: <FaJsSquare className="text-white transition-all duration-300 group-hover:text-yellow-400 size-[50px] group-hover:size-[60px]" /> },
    { id: 4, label: "Typescript", icon: <BiLogoTypescript className="text-white transition-all duration-300 group-hover:text-blue-400 size-[50px] group-hover:size-[60px]" /> },
    { id: 5, label: "React", icon: <FaReact className="text-white transition-all duration-300 group-hover:text-blue-400 size-[50px] group-hover:size-[60px]" /> },
    { id: 6, label: "Vue JS", icon: <IoLogoVue className="text-white transition-all duration-300 size-[50px] group-hover:size-[60px] group-hover:text-green-400" /> },
    { id: 7, label: "Node JS", icon: <FaNodeJs className="text-white transition-all duration-300 size-[50px] group-hover:size-[60px] group-hover:text-green-400" /> },
    { id: 8, label: "Tailwind CSS", icon: <RiTailwindCssLine className="text-white transition-all duration-300 size-[50px] group-hover:size-[60px] group-hover:text-blue-400" /> },
    { id: 9, label: "Express JS", icon: <SiExpress className="text-white transition-all duration-300 size-[50px] group-hover:size-[60px] group-hover:text-blue-400" /> },
    { id: 10, label: "Shadcn/UI", icon: <SiShadcnui className="text-white transition-all duration-300 size-[50px] group-hover:size-[60px] group-hover:text-slate-400" /> },
    { id: 11, label: "MySQL", icon: <DiMysql className="text-white transition-all duration-300 size-[50px] group-hover:size-[60px] group-hover:text-orange-400" /> },
    { id: 12, label: "PHP", icon: <FaPhp className="text-white transition-all duration-300 size-[50px] group-hover:size-[60px] group-hover:text-blue-400" /> },
    { id: 13, label: "Figma", icon: <FaFigma className="text-white transition-all duration-300 size-[50px] group-hover:size-[60px] group-hover:text-violet-400" /> },
];

export default skillsSharedData;