import { ReactNode, useState, createContext } from "react";
import { notify } from "../Utils/Notify";

type ScoreContextType = {
    score: number;
    updateScore: (type: string) => void;
    resetScore: () => void;
    connectScore: number;
    followingScore: number;
    projectsScore: number;
    contactScore: number;
    copyScore: number;
};

export const ScoreContext = createContext<ScoreContextType | undefined>(
    undefined
);

export default function ScoreContextProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [score, setScore] = useState(0);
    const [connectScore, setConnectScore] = useState(0);
    const [followingScore, setFollowingScore] = useState(0);
    const [projectsScore, setProjectsScore] = useState(0);
    const [contactScore, setContactScore] = useState(0);
    const [copyScore, setCopyScore] = useState(0);
    const updateScore = (type: string) => {
        switch (type) {
            case "connect":
                if (connectScore === 0) {
                    setConnectScore(20);
                    setScore(score + 20);
                    notify("connect");
                }
                break;
            case "follow":
                if (followingScore === 0) {
                    setFollowingScore(20);
                    setScore(score + 20);
                    notify("follow");
                }
                break;
            case "project":
                if (projectsScore === 0) {
                    setProjectsScore(20);
                    setScore(score + 20);
                    notify("project");
                }
                break;
            case "contact":
                if (contactScore === 0) {
                    setContactScore(20);
                    setScore(score + 20);
                    notify("contact");
                }
                break;
            case "copy":
                if (copyScore === 0) {
                    setCopyScore(20);
                    setScore(score + 20);
                    notify("copy");
                }
                break;
        }
    };

    const resetScore = () => {
        setScore(0);
        setConnectScore(0);
        setFollowingScore(0);
        setProjectsScore(0);
        setContactScore(0);
        setCopyScore(0);
    };

    return (
        <ScoreContext.Provider
            value={{
                score,
                updateScore,
                resetScore,
                followingScore,
                projectsScore,
                connectScore,
                contactScore,
                copyScore,
            }}
        >
            {children}
        </ScoreContext.Provider>
    );
}
