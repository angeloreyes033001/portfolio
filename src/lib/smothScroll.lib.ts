import { RefObject } from "react";
const scrollToSection = (ref: RefObject<HTMLDivElement>) => {
    if (ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth" });
    }
};

export default scrollToSection;