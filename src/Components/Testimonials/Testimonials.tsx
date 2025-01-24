import { testimonials } from "../../data";
import { InfiniteMovingCards } from "../ui/MovingCards";

const Testimonials = () => {
    return (
        <div className="pb-20" id="Testimonials">
            <h2 className="text-4xl md:text-5xl  text-center mb-20 font-bold text-white">
                Kind words from{" "}
                <span className="text-[#A374FF]">satisfied clients</span>
            </h2>
            <div className=" rounded-md flex flex-col antialiased bg-black-100   items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
        </div>
    );
};

export default Testimonials;
