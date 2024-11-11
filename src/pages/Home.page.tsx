import React from "react";
import { navlistProps } from "@/types/navlist.type";
import scrollToSection from "@/lib/smothScroll.lib";
import { Button } from "@/components/ui/button";
import { IoMdHand } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiSolidCloudDownload } from "react-icons/bi";
import resume from '@/assets/resume_angelo_reyes.pdf'

//for testing only
import profileIMG from '@/assets/profile.png';


interface FooterProps {
    listNav: navlistProps[];
}
const Home : React.FC<FooterProps>= ({listNav})=>{

    const personaldata = {
        fullname: "Angelo Reyes",
        description: "Passionate about crafting engaging digital experiences, I specialize in building responsive, efficient, and user-friendly web applications. With a strong foundation in modern web technologies, I bring ideas to life, turning visions into sleek, functional interfaces. Driven by creativity and innovation, I’m committed to delivering high-quality code and memorable user experiences.",
        profile: profileIMG,
        resume: resume
    }

    return(
        <>
            <section className="container mx-auto" >
                <div className=" px-[5%] md:px-[10%]" >
                    <nav className="flex justify-center h-[80px] items-center" >
                        <ul className="flex gap-3 md:gap-4 ">
                            {listNav.map((item) => (
                                <li key={item.label} className="text-[14px] md:text-[18px] text-white font-extralight group">
                                    <span className="online-none cursor-pointer select-none border-none bg-transparent w-auto group-hover:text-color-blue transition-all duration-300 " onClick={() => scrollToSection(item.ref)}>
                                        {item.label}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="py-[5%] px-[10]" >
                        <div className="flex justify-center md:justify-start" >
                            <div className="border border-font-color-blue-dead hover:bg-font-color-blue-dead p-3 w-[200px] rounded-full gap-5 flex items-center justify-center" >
                                <span>
                                    <IoMdHand className="text-[20px] text-white" />
                                </span>
                                <p className="text-white" >Hi, Everyone</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center mt-10" >
                            <div className="size-[300px] md:size-[500px] rounded-full relative " >
                                <div className=" top-0 left absolute w-full h-full" >
                                    <div className="realtive w-full h-full" >
                                    <div className="absolute top-0 left-[-20%]" ><FaHtml5 className="size-[50px] text-orange-400" /></div>
                                        <div className="absolute opacity-80 top-[30%] left-0 " ><FaReact className="size-[50px] text-blue-400" /></div>
                                        <div className="absolute opacity-80 top-[90%] left-[-10%]" ><SiTypescript className="size-[50px] rotate-[-12deg] text-blue-400" /></div>
                                        <div className="absolute opacity-80 top-[80%] right-[-5%] z-20" ><FaJsSquare className="size-[60px] rotate-12 text-yellow-400" /></div>
                                        <div className="absolute opacity-80 top-[5%] right-[-3%] z-20" ><FaVuejs className="size-[40px] rotate-12  text-green-400" /></div>
                                        <div className="absolute opacity-80 top-[40%] right-[-20%] z-20" ><RiTailwindCssFill className="size-[40px] rotate-12  text-blue-400" /></div>
                                    </div>
                                </div>
                                <img src={personaldata.profile} alt="profile" className="w-full h-full absolute top-0 left-0 z-10 bg-drop" />
                            </div>
                        </div>
                        <div className="" >
                            <h1 className="text-5xl md:text-9xl  bg-clip-text text-transparent   bg-gradient-to-r from-blue-200 to-blue-600 font-black text-center font-concert-one p-5 font-righteous" >{personaldata.fullname}</h1>
                            <p className="text-white text-center" >{personaldata.description}</p>
                        </div>
                        <div className="flex justify-center mt-5" >
                            <a href={personaldata.resume} download >
                                <Button className="bg-blue-500 hover:bg-blue-400" >
                                    <BiSolidCloudDownload className="text-white text-[20px]" />
                                    <span>Download CV</span>    
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

export default Home;