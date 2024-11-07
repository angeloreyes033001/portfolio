import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { navlistProps } from "@/types/navlist.type";
import scrollToSection from "@/lib/smothScroll.lib";
import resume from '@/assets/resume_angelo_reyes.pdf';
import messenger  from '@/assets/messenger.png';
import { BiSolidCloudDownload } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
import { IoPhonePortrait } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
interface FooterProps {
    listNav: navlistProps[];
}

const contactlist = [
    { label: "Zaragoza, Nueva Ecija", icon: <IoLocationSharp className="text-white" /> },
    { label: "09944732120", icon: <IoPhonePortrait className="text-white" /> },
    { label: "angelo.balisa.reyes@gmail.com", icon: <MdEmail className="text-white" /> },
]

const Footer: React.FC<FooterProps> = ({ listNav }) => {

    return (
        <>
            <section className="select-none">
                <div className="py-[3%] px-[5%] md:px-[10%]">
                    <Separator className="bg-font-color-blue-dead" />
                    <div className="grid grid-cols-1 grid-rows-auto md:grid-rows-1 md:grid-cols-3 py-10 gap-5" >
                        <div className="flex justify-center items-center" >
                            <h1 className="text-5xl" >
                                <span className="text-white font-extrabold" >angelo.</span>
                                <span className="text-color-blue" >dev</span>
                            </h1>
                        </div>
                        <div className="flex items-center justify-center" >
                            <div>
                                {contactlist.map((contact)=>(
                                    <div key={contact.label} className="flex items-center gap-4 mb-3" >
                                        {contact.icon}
                                        <p className="text-white" >{contact.label}</p>
                                    </div>
                                ))}
                                <a href="https://www.facebook.com/senpai.gelo.30" target="_BLANK" >
                                    <div className="flex items-center gap-4 mb-3" >
                                        <FaFacebookSquare className="text-white" />
                                        <p className="text-white" >Facebook</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="grid place-content-center w-full" >
                            <div className="w-full" >
                                <img src={messenger} className="size-[200px] md:size-[150px]  bg-main-color rounded-[5px]" />
                            </div>
                        </div>
                    </div>
                    <Separator className="bg-font-color-blue-dead mb-10" />
                    <p className=" flex items-center group gap-2  justify-center " >
                        <span className="font-bold text-white group-hover:text-color-blue" >Coded by your truly</span>
                        <small className="text-white " > | ReactJS, Tailwind , Shadcn/UI</small>
                    </p>
                </div>
            </section>
        </>
    );
};

export default Footer;
