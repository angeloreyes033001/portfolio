import HomePage from "./Home.page";
import SkillPage from "./Skill.page";
import ExperiencePage from "./Experience.page";
import ProjectPage from "./Project.page";
import ContactPage from "./Contact.page";
import FooterPage from "./Footer.page";
import { useNavListData } from "@/data/navlist.data";

const Index = () => {
    const { navlistData, homeRef, skillRef, experienceRef, projectRef, contactRef, footerRef } = useNavListData();

    return (
        <main className="bg-main-color h-screen w-full overflow-auto">
            <section className="w-full h-full">
                <div className=" h-auto md:min-h-full"  ref={homeRef}><HomePage listNav={navlistData} /></div>
                <div className="h-auto"  ref={skillRef} ><SkillPage /></div>
                <div className="h-auto"  ref={experienceRef}><ExperiencePage /></div>
                <div className="min-h-full"  ref={projectRef}><ProjectPage /></div>
                <div className="h-auto"  ref={contactRef}><ContactPage /></div>
                <div className="h-auto"  ref={footerRef}><FooterPage listNav={navlistData} /></div>
            </section>
        </main>
    );
};

export default Index;