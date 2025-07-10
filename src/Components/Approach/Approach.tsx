import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../ui/canvas-reveal-effect";

export function CanvasRevealEffectDemo() {
    return (
        <>
            <h2 className=" text-4xl md:text-5xl text-center  font-bold text-white">
                My <span className="text-[#A374FF]">Approach</span>
            </h2>
            <div className="py-14 flex flex-col md:flex-row  items-center justify-center w-full gap-4 mx-auto px-8">
                <Card
                    title={"Planning & Strategy"}
                    des={`We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements.`}
                    icon={<Phase title={"Phase 1"} />}
                >
                    <CanvasRevealEffect
                        animationSpeed={5.1}
                        containerClassName="bg-emerald-900"
                    />
                </Card>
                <Card
                    title="Development & Progress Update"
                    des="Once we agree on the plan, I cue my lofi playlist and dive intocoding. From initial sketches to polished code, I keep you updated every step of the way."
                    icon={<Phase title={"Phase 2"} />}
                >
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-black"
                        colors={[
                            [236, 72, 153],
                            [232, 121, 249],
                        ]}
                        dotSize={2}
                    />
                    {/* Radial gradient for the cute fade */}
                    <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] " />
                </Card>
                <Card
                    title="Development & Launch"
                    des="This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up."
                    icon={<Phase title={"Phase 3"} />}
                >
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-sky-600"
                        colors={[[125, 211, 252]]}
                    />
                </Card>
            </div>
        </>
    );
}

const Card = ({
    title,
    icon,
    children,
    des,
}: {
    title: string;
    icon: React.ReactNode;
    children?: React.ReactNode;
    des?: string;
}) => {
    const [hovered, setHovered] = React.useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="border  group/canvas-card flex items-center justify-center border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem] md:h-[30rem] lg:h-[35rem] bg-slate-900"
        >
            <Icon className="absolute h-6 rounded-lg w-6 opacity-20 -top-3 -left-3 text-white" />
            <Icon className="absolute h-6 rounded-lg w-6 opacity-20 -bottom-3 -left-3 text-white " />
            <Icon className="absolute h-6 rounded-lg w-6 opacity-20 -top-3 -right-3 text-white " />
            <Icon className="absolute h-6 rounded-lg w-6 opacity-20 -bottom-3 -right-3 text-white " />

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="h-full w-full absolute inset-0"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-20 text-center">
                <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
                    {icon}
                </div>
                {hovered && (
                    <>
                        <h2 className="text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10  mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
                            {title}
                        </h2>
                        <p className="text-white-200 text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10  mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
                            {des}
                        </p>
                    </>
                )}
            </div>
        </div>
    );
};

interface PhaseType {
    title: string;
}
const Phase = ({ title }: PhaseType) => {
    return (
        <div>
            <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
                <span
                    className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
                />
                <span
                    className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl"
                >
                    {title}
                </span>
            </button>
        </div>
    );
};

export const Icon = ({ className, ...rest }: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
            {...rest}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m6-6H6"
            />
        </svg>
    );
};
