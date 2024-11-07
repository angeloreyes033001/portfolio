import  {ExperienceListProps } from '@/types/experience.type'; 

const ExperienceList: React.FC<ExperienceListProps> = ({date,company,position,location,description})=>{
    return(
        <>
            <div className="group p-4 border border-slate-700 hover:bg-font-color-blue-dead transition-all duration-500 rounded shadow-md hover:bg-font-color-one min-h-[180px] ">
                <h3 className="font-bold text-[clamp(15px,18px,22px)] text-font-color-blue-dead group-hover:text-blue-500 ">
                    <span className='font-light' >{position} | </span>
                    {company}
                </h3>
                <p className='container mx-auto text-slate-500 group-hover:text-white text-[12px]' >{location}</p>
                <small className="container mx-auto text-slate-500 group-hover:text-white">{date}</small>
                <p className="container mx-auto mt-2 text-slate-500 group-hover:text-white">{description}</p>
            </div>
        </>
    );
}

export default ExperienceList;