import PageHeader from "@/components/custom/PageHeader.component";
import ExperienceList from "@/components/custom/ExperienceList.component";
import experienceSharedData from "@/data/experience.data";

const Experience = ()=>{

    return(
        <>
            <section className="container mx-auto " >
                <div className="py-[5%] px-[5%] md:px-[10%]" >
                    <PageHeader title="experience" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3" >
                        {
                            [...experienceSharedData].reverse().map((experience) => (
                                <ExperienceList
                                    key={experience.id}
                                    id={experience.id}
                                    date={experience.date}
                                    company={experience.company}
                                    position={experience.position}
                                    description={experience.description}
                                />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )

}
export default Experience;