import { useContext } from "react";
import { ScoreContext } from "../../Context/ScoreContext";

const ConnectButton = () => {
    const context = useContext(ScoreContext);

    if (!context) {
        throw new Error(
            "ScoreContext must be used within a ScoreContextProvider"
        );
    }

    const { updateScore } = context;
    return (
        <button className="group relative text-base rounded-full ">
            <div
                onClick={() => {
                    updateScore("connect");
                }}
                className="relative z-10 inline-flex  h-12 items-center justify-center overflow-hidden rounded-full border border-neutral-200 bg-transparent px-6 font-medium text-white transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
            >
                <span className="w-[10px] h-[10px] bg-[#00ff00] rounded-full mr-2 animate-pulse"></span>
                let&apos;s connect
            </div>
            <div className="absolute rounded-full  inset-0 z-0 h-full w-full transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:[box-shadow:5px_5px_#00c200,10px_10px_#34fa34,15px_15px_#f2fcf2]"></div>
        </button>
    );
};

export default ConnectButton;
