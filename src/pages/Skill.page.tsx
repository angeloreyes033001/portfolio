import PageHeader from "@/components/custom/PageHeader.component";
import skillsSharedData from "@/data/skill.data";

const Skills = () => {
    return (
        <>
            <section className="container mx-auto">
                <div className="py-[5%] px-[5%] md:px-[10%] select-none">
                    <PageHeader title="skills" />
                    <div className="text-center">
                        {skillsSharedData.map((skill) => (
                            <div key={skill.id} className="group inline-block w-[100px] h-[130px] m-2">
                                <div className={`flex flex-col items-center justify-center w-full h-full`}>
                                    {skill.icon}
                                    <small className="text-white mt-2">{skill.label}</small>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Skills;
