import { BentoGrid, BentoGridItem } from "../ui/BentoGrid";
import { gridItems } from "../../data";

const About = () => {
    return (
        <div className="" id="About">
            <BentoGrid className="w-full py-20">
                {gridItems.map((item, i) => (
                    <BentoGridItem
                        id={item.id}
                        key={i}
                        title={item.title}
                        description={item.description}
                        // remove icon prop
                        // remove original classname condition
                        className={item.className}
                        img={item.img}
                        imgClassName={item.imgClassName}
                        titleClassName={item.titleClassName}
                        spareImg={item.spareImg}
                    />
                ))}
            </BentoGrid>
        </div>
    );
};

export default About;
