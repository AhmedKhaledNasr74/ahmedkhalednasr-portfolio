import { cn } from "../../lib/utils";
interface MagicButtonType {
    title: string;
    position?: string;
    icon?: React.ReactElement;
    className?: string;
    handleClick?: () => void;
}
const MagicButton = ({
    title,
    position,
    icon,
    className,
    handleClick,
}: MagicButtonType) => {
    return (
        <button
            className={cn(
                "relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none text-center",
                className
            )}
            onClick={handleClick}
        >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex  h-full w-full cursor-pointer rounded-lg items-center justify-between gap-3  bg-slate-950 px-16 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                {position === "left" && icon}
                {title}
                {position === "right" && icon}
            </span>
        </button>
    );
};

export default MagicButton;
