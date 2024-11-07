import { useRef } from "react";
import { navlistProps } from "@/types/navlist.type";

export const useNavListData = () => {
    const homeRef = useRef<HTMLDivElement>(null);
    const skillRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);
    const projectRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    const navlistData: navlistProps[] = [
        { id: "home", label: "Home", ref: homeRef },
        { id: "skill", label: "Skills", ref: skillRef },
        { id:"experience", label: "Experience", ref: experienceRef },
        { id:"project", label: "Projects", ref: projectRef },
        { id: "contact", label: "Contact", ref: contactRef },
    ];

    return { navlistData, homeRef ,skillRef, experienceRef, projectRef, contactRef };
};