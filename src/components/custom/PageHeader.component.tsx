import { PageHeaderProps } from '../../types/experience.type';

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
    return (
        <div className="flex items-center group gap-3 select-none my-5">
            <div className="border border-color-blue w-[80px] transition-all duration-300 group-hover:w-[150px]"></div>
            <span className="text-color-blue uppercase font-bold text-[18px] ">{title}</span>
        </div>
    );
};

export default PageHeader;
