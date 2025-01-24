import { useContext } from "react";
import { ScoreContext } from "../../Context/ScoreContext";
import { RefreshCcw } from "lucide-react";
import { notify } from "../../Utils/Notify";

const Score = () => {
    const context = useContext(ScoreContext);
    if (!context) {
        throw new Error(
            "ScoreContext must be used within a ScoreContextProvider"
        );
    }
    const { score, resetScore } = context;
    return (
        <div className="absolute top-10 left-10 text-2xl text-white font-serif flex gap-4 items-center ">
            <div>{score}/100 points</div>{" "}
            <RefreshCcw
                className="cursor-pointer hover:-rotate-90 transition-all"
                onClick={() => {
                    resetScore();
                    if (score != 0) notify("reset");
                }}
            />
        </div>
    );
};

export default Score;
0;
