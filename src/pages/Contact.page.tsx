import PageHeader from "@/components/custom/PageHeader.component";
import { Button } from "@/components/ui/button";
import { FaFacebookSquare } from "react-icons/fa";
import { IoMdHand } from "react-icons/io";

const fb = "https://www.facebook.com/senpai.gelo.30";

const Contact = ()=>{
    return(
        <>
            <section className=" container mx-auto" >
                <div className="py-[5%] px-[5%] md:px-[10%]" >
                    <PageHeader title="Contact" />
                    <div className="flex justify-center" >
                        <div className=" flex items-center h-auto min-w-[300px] w-auto bg-slate-600/30 p-5 rounded-[20px]" >
                            <div className="grid grid-cols-[80px,1fr]" >
                                <span className="flex items-center justify-center  text-white" >
                                    <IoMdHand className="text-[25px] animate-pulse" />
                                </span>
                                <p className="text-white" >Seeking professional assistance for your project?</p>
                            </div>
                        </div>
                    </div>
                    <h1 className="bg-gradient-to-r from-blue-500 to-color-blue bg-clip-text text-transparent transition-all duration-1000 text-8xl font-extrabold text-center p-3 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-600">Build, Design, Deploy</h1>
                    <p className="text-center text-white text-[20px]" >Transforming ideas into dynamic, responsive websites with precision and creativity. I bring expertise in modern web technologies, ensuring robust, visually captivating, and seamless digital experiences.</p>
                    <div className="mt-10" >
                        <h1 className="text-center text-2xl text-white font-extrabold" >Let's Connect</h1>
                    </div>
                    <div className=" px-[5%] md:px-[30%]" >
                        <a href={fb} target="_BLANK" >
                            <Button  className=" w-full p-5 mt-10 bg-gradient-to-l from-blue-500 to-color-blue flex justify-center items-center gap-5 rounded-[10px] " >
                            <span className="text-white" >
                                <FaFacebookSquare className="text-[18px]" />
                            </span>
                            <p className="text-white" >Send Message</p>
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;