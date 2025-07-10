import { projects } from "../../data/index";
import ProjectDetails from "../ProjectDetails/ProjectDetails";
import { PinContainer } from "../ui/3d-pin";
interface Project {
    id: number;
    title: string;
    des: string;
    img: string;
    iconLists: { id: number; name: string; image: string }[];
    link: string;
}
const Projects = () => {
    return (
        <div id="Projects" className="pb-20">
            <h2 className=" text-4xl md:text-5xl text-center mb-32 font-bold text-white">
                A small selection of{" "}
                <span className="text-[#A374FF]">recent projects</span>
            </h2>
            <div className="py-20 grid md:grid-cols-2 sm:gap-x-10 gap-y-40 sm:grid-cols-1 justify-center ">
                {projects.map((project: Project) => (
                    <div className="h-[30rem] max-w-[40rem]" key={project.id}>
                        <PinContainer
                            children={
                                <ProjectDetails
                                    id={project.id}
                                    title={project.title}
                                    des={project.des}
                                    img={project.img}
                                    iconLists={project.iconLists}
                                    link={project.link}
                                />
                            }
                            href={project.link}
                            title={project.title}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
