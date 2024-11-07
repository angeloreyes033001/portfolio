import { RefObject } from "react";

export interface navlistProps {
    id: string,
    label: string;
    ref: RefObject<HTMLDivElement>;
}