import pump from '@/assets/project/pump.png';
import cashpinas from '@/assets/project/cashpinas.png';
import automatedPortal from '@/assets/project/automated.png';
import schedlr from '@/assets/project/schedlr.png';
import ticketing from '@/assets/project/ticketing.png';
import algetile from '@/assets/project/algetiles.jpg';
import defineMe from '@/assets/project/defineme.png';

const projectSharedData = [
    {
        id: 1, 
        title: "Pump's: Pet Adaption",
        desription: "This project was my final case study for my Mobile Development course. The purpose of the project was to build a hybrid mobile application to enhance our development skills. I need to convert this website into a mobile application and run it on an actual smartphone.",
        image: pump,
        tech: ["Angular","Bootstrap","Cordova"]
    },
    {
        id: 2, 
        title: "CashPinas",
        desription: "A web-based investment application. This project was created as a case study for a client.",
        image: cashpinas,
        tech: ["HTML","JS","PHP","JQuery","MySQL"]
    },
    {
        id: 3, 
        title: "ZNHS: Centralized student information portal acces.",
        desription:  "This project was developed as part of my client's thesis. It is a web application designed to monitor individual students' grades and attendance, providing teachers and administrators with valuable insights. The system aims to streamline academic tracking and enhance communication between students, parents, and educational staff.",
        image: automatedPortal,
        tech: ["VueJS","NodeJS","Tailwind","MySQL"]
    },
    {
        id: 4, 
        title: "Schedlr:Online Scheduling System for Nueva Ecija University Of Science and Technology",
        desription: "A web-based application system developed and designed to provide automated class schedule generation as well as management system for CICT Department, Nueva Ecija University of Science andTechnology.",
        image: schedlr,
        tech: ["VueJS","Laravel","TailwindCSS","Bootstrap","MySQL"]
    },
    {
        id: 5, 
        title: "Ticketing System",
        desription: "A requesting form for preventive maintenance for computer, laptop, tablet, router and software",
        image: ticketing,
        tech: ["VueJS","NodeJS","Prisma","TailwindCSS","PrimeVue","SocketIO","ChartJS","MySQL"]
    },
    {
        id: 6, 
        title: "AlgeTiles: Digital Game-Base Factorization using Algebra tile Method.",
        desription: "This is my client's thesis project. A website game that helps you learn algebra easily and enjoyably way.",
        image: algetile ,
        tech: ["ReactJS","TailwindCSS","Supabase"]
    },
    {
        id: 7, 
        title: "DefineMe!: Online Dictionary",
        desription: "DefineMe! is a free dictionary mobile applicatiom, You can download application here. (https://defineme.netlify.app)",
        image: defineMe ,
        tech: ["ReactJS","TailwindCSS","CapacitorJS"]
    },
]

export default projectSharedData;