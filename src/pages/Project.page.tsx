import PageHeader from "@/components/custom/PageHeader.component";
import { Button } from "@/components/ui/button";
import projectSharedData from "@/data/project.data";
import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import algetile from '@/assets/project/algetiles.jpg';

const Project = ()=>{

    const [visibleCount,setVisibleCount] = useState<number>(4);

    const handleToggle = ()=>{
        if(visibleCount >= projectSharedData.length){
            setVisibleCount(4);
            console.log("call")
        }
        else{
            setVisibleCount(visibleCount+4);
        }
    }

    

    return(
        <>
            <section className="container mx-auto" >
                <div className="py-[5%] px-[5%] md:px-[10%]" >
                    <PageHeader title="Projects" />
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5" >
                        {
                            [...projectSharedData].reverse().slice(0,visibleCount).map((project)=>(
                                <div key={project.id} className=" h-[400px] text-white group" >
                                    <div className="bg-cover bg-no-repeat bg-center h-full rounded-[10px]" style={{ backgroundImage: `url(${project.image})` }}>
                                        <div className=" bg-white/30 rounded-[10px] group-hover:bg-white/80 text-black p-5 h-full grid items-end group-hover:items-center " >
                                            <div className="opacity-0 group-hover:opacity-100 transition-all duration-1000" >
                                                <h1 className=" font-bold text-center text-[20px]" >{project.title}</h1>
                                                <p className="" >{project.desription}</p>
                                                <div className="text-center " >
                                                    {
                                                        project.tech.map((tech,i)=>(
                                                            <div  key={i} className="m-1 inline-block bg-color-blue px-2 rounded-full text-white" >{tech}</div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex justify-center mt-5">
                        <Button 
                            className="bg-slate-700 hover:bg-slate-600 h-[50px] w-[200px] " 
                            onClick={handleToggle}
                        >
                            { visibleCount >= projectSharedData.length ? (
                                <span >
                                    <span className="flex justify-center" >
                                        <IoIosArrowDropup className="" />
                                    </span>
                                    <span>Show Less</span>
                                </span>
                            ) : (
                                <span >
                                    
                                    <span>Show More</span>
                                    <span className="flex justify-center" >
                                        <IoIosArrowDropdown className="" />
                                    </span>
                                </span>
                            )}
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Project;