import { useContext } from "react";
import { AnimatedTooltip } from "../ui/ToolTip";
import { ArrowUpRight } from "lucide-react";
import { ScoreContext } from "../../Context/ScoreContext";

interface Project {
    id: number;
    title: string;
    des: string;
    img: string;
    iconLists: { id: number; name: string; image: string }[];
    link: string;
}

const ProjectDetails = ({ id, title, des, img, iconLists, link }: Project) => {
    const context = useContext(ScoreContext);

    if (!context) {
        throw new Error(
            "ScoreContext must be used within a ScoreContextProvider"
        );
    }

    const { updateScore } = context;
    return (
        <div
            className="text-white p-2 h-[36rem] flex flex-col "
            key={link + id}
            onClick={() => {
                updateScore("project");
            }}
        >
            <div className="relative rounded-3xl w-full  overflow-hidden px-5">
                {/* Background with radial blur */}
                <div className="absolute inset-0 bg-black-300 bg-opacity-50 blur-effect"></div>

                {/* Content inside the div */}
                <img
                    src={img}
                    alt="projectPhoto"
                    className="relative z-10 p-2  w-full  object-contain rounded-3xl rotate-[2deg]"
                />
            </div>
            <div>
                <div className="text-2xl font-bold py-2">{title}</div>
                <div className="text-xl text-white-100 py-1">{des}</div>
            </div>

            <div className="flex justify-between items-center my-5 mt-auto">
                <div className="flex items-center justify-start  ">
                    <AnimatedTooltip items={iconLists} />
                </div>
                <div>
                    <div className="flex justify-between items-center gap-3 text-[#A374FF]">
                        <span>Check Live Site</span>
                        <ArrowUpRight />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
