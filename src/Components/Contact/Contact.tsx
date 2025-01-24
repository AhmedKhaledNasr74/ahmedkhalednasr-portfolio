import { useContext, useRef, useState } from "react";
import { LampContainer } from "../ui/Lamp";
import LightButton from "../ui/LightButton";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ScoreContext } from "../../Context/ScoreContext";
export function Contact() {
    const context = useContext(ScoreContext);

    if (!context) {
        throw new Error(
            "ScoreContext must be used within a ScoreContextProvider"
        );
    }

    const { updateScore } = context;
    const form = useRef<HTMLFormElement>(null);
    const [contactMessage, setContactMessage] = useState("");

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        // Ensure form.current is not null before calling emailjs.sendForm
        if (form.current) {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

            emailjs
                .sendForm(serviceId, templateId, form.current, publicKey)
                .then(
                    () => {
                        setContactMessage("Message sent successfully");

                        updateScore("contact");
                    },
                    (error) => {
                        console.error("Failed to send message:", error);
                        setContactMessage(
                            "Failed to send message. Please try again later."
                        );
                    }
                );
        } else {
            console.error("Form reference is null");
        }
    };
    return (
        <div id="Contact">
            <LampContainer>
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="mt-8 bg-gradient-to-b from-white to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                >
                    So, You want to <br /> Contact me?
                </motion.h1>
            </LampContainer>
            <div className="-translate-y-[70%]">
                <div className="p-4 mx-auto max-w-xl  font-[sans-serif]">
                    {contactMessage && (
                        <div className="w-full text-white formBg bg-transparent py-2.5 px-4  border border-white-100 text-center text-2xl">
                            {contactMessage}
                        </div>
                    )}
                    <form
                        className="mt-8 space-y-4"
                        ref={form}
                        onSubmit={(e) => {
                            setContactMessage("");
                            sendEmail(e);
                        }}
                    >
                        <input
                            type="text"
                            placeholder="Name"
                            name="user_name"
                            required
                            className="w-full text-white formBg bg-transparent py-2.5 px-4  border focus:border-white-100  text-sm outline-none transition-all"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            name="user_email"
                            required
                            className="w-full text-white formBg bg-transparent py-2.5 px-4  border focus:border-white-100 text-sm outline-none transition-all"
                        />

                        <textarea
                            placeholder="Message"
                            name="message"
                            required
                            rows={4}
                            className="w-full text-white formBg bg-transparent px-4  border focus:border-white-100  text-sm pt-3 outline-none transition-all"
                        ></textarea>

                        <LightButton title="Send" />
                    </form>
                </div>
            </div>
        </div>
    );
}
