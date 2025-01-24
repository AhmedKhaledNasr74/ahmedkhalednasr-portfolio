"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../lib/utils";

export const TextGenerateEffect = ({
    words,
    className,
    duration = 0.5,
}: {
    words: React.ReactElement[];
    className?: string;
    duration?: number;
}) => {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        animate(
            "span",
            {
                opacity: 1,
            },
            {
                duration: duration,
                delay: stagger(0.3),
                ease: "easeOut",
            }
        );
    }, [scope.current]);

    const renderWords = () => {
        return (
            <motion.div ref={scope} className="transform-gpu">
                {words.map((word, idx) => {
                    return (
                        <motion.span
                            key={idx}
                            className="text-white opacity-0 block"
                            style={{
                                willChange: "opacity",
                            }}
                        >
                            {word}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    return (
        <div className={cn("font-bold", className)}>
            <div className="mt-4">
                <div className="text-white leading-snug tracking-wide">
                    {renderWords()}
                </div>
            </div>
        </div>
    );
};
