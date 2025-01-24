import { Send } from "lucide-react";
import ConnectButton from "../ui/ConnectButton";
import MagicButton from "../ui/MagicButton";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import Score from "../Score/Score";

const Hero = () => {
    return (
        <div className="py-20  h-screen   w-full rounded-md flex items-center justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Score />
            <div className="absolute pointer-events-none  inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                        Dynamic Web Magic with React.js
                    </p>

                    <TextGenerateEffect
                        words={[
                            <div className="text-[#A374FF] md:-mb-5 lg:-mb-6 flex items-center justify-center gap-3">
                                CREATIVE
                            </div>,
                            <div className="text-[#FFD074] md:-mb-5 lg:-mb-6">
                                SOFTWARE
                            </div>,
                            <div className="text-[#FFFFE3] md:-mb-5 lg:-mb-6 text-start flex items-center">
                                ENGINEER
                                <ConnectButton />
                            </div>,
                            <div className="text-[#17F1D1] md:-mb-5 lg:-mb-6">
                                <span className="text-[#FFFFE3]">& </span>{" "}
                                INSTRUCTOR
                            </div>,
                        ]}
                        className="text-center text-[40px]  md:text-5xl lg:text-7xl "
                    />

                    <p className="text-center md:tracking-wider mb-14 text-sm md:text-lg lg:text-2xl text-white mt-14">
                        Hi! I&apos;m Ahmed, a React.js Developer based in Egypt.
                    </p>

                    <a href="#Projects">
                        <MagicButton
                            title="Show my work"
                            icon={<Send className="w5 h-5" />}
                            position="right"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
