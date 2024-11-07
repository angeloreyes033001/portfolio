import { ExperienceListProps } from "@/types/experience.type";

const experienceSharedData: ExperienceListProps[] = [
    { 
        id: 1, 
        date: "",
        company: "Web Developer", 
        position: "Freelancer", 
        location :"",
        description: "Designed and developed complete website application." 
    },
    { 
        id: 2, 
        date: "January - April 2024",
        company: "Dr. Paulino J. Garcia Memorial Research and Medical Center", 
        position: "On the Job Training", 
        location :"Cabanatuan City, Nueva Ecija",
        description: "Trainee as a Junior Web Developer and Technical Support" 
    },
    { 
        id: 3, 
        date: "September 16 2024 - October 24 2024",
        company: "Inobei.Inc", 
        position: "Employee(PHP Developer)", 
        location :"AIC Ctr. Bldg. 204 Escolta St. Binondo Manila",
        description:  "Employee as a PHP Developer, responsible development tasks, including writing and maintaining PHP scripts" 
    },
];

export default experienceSharedData;