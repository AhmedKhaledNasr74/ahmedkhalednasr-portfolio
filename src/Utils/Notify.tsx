import toast from "react-hot-toast";
import sound from "../assets/xbox.mp3";
const copyMessages = [
    "Wow, copying my email? Should I prepare for a job offer or a spam email?",
    "Look at you, making all the right moves. Now, where’s my offer letter? ",
    "Email copied. Does this mean we’re best friends now? for dreaming big! ",
    "Is copying my email the secret to success? You’re about to find out. ",
    "You copied my email? Guess I’ll be waiting for your message. ",
];

const followMessages = [
    "Checking out my socials? Just don’t like my old vacation photos, okay? .",
    "So, you’re deep-diving into my online persona? Bold move. for effort!",
    "Nice, you’re visiting my socials! Please ignore the memes. ",
    "Ah, so you’re checking if I’m *fun* outside of work? Spoiler: I am. ",
    "Clicked on my social? Great, now you’re legally obligated to endorse me on LinkedIn.",
    "Digging through my socials like you’re Indiana Jones? for exploration! ",
    "Visiting my socials? Just don’t judge me for my playlist choices. ",
    "Clicked on my socials? Welcome to the land of overthinking captions. ",
    "Oh, you clicked on my socials? Brace yourself for some top-tier selfies. ",
];

const connectMessages = [
    "You want to connect? Smart move. I’ll expect your offer letter by tomorrow.",
    "Oh, you’re connecting with me? Great, now you’re officially in the cool club.",
    "Want to connect? I’m flattered, really. Now let’s make magic happen.",
    "Connecting with me? Don’t worry, I’m just as cool in person. (Probably.)",
    "You hit connect? Bold move. I’ll try to live up to your expectations.",
    "So you want to connect? Just know you’ve made the best decision of your day.",
    "Connecting with me? Let’s make LinkedIn jealous of this relationship.",
];

const projectMessages = [
    "You clicked my project? Smart move! ",
    "Diving into my work? Prepare to be amazed. ",
    "Clicked a project? Instant genius points for you! ",
    "Exploring my project? Get ready to be wowed! ",
    "This project? Pure brilliance. Don’t blink! ",
    "Don’t judge me by my comments—just enjoy the project! ",
    "Clicked my project? Welcome to the brilliance zone! ",
];

const emailMessages = [
    "You sent an email? I’m already checking it out.",
    "My inbox just got cooler. Thanks for the email!",
    "You emailed me? I’m ready to impress!",
    "Message received! Let’s make some magic happen.",
    "Email received! Brace yourself for a reply that’ll blow your mind.",
    "Your email’s in the queue—get ready for awesomeness.",
    "I got your email! Let the professional brilliance begin.",
    "I’ve got your email. Let’s turn this into something legendary.",
];

export const notify = (title: string) => {
    switch (title) {
        case "connect":
            toast.custom(
                <div className="text-white formBg px-4 py-4">
                    {
                        connectMessages[
                            Math.floor(Math.random() * connectMessages.length)
                        ]
                    }
                    <span className="font-bold text-[#A374FF]">
                        {" "}
                        +20 points!
                    </span>
                </div>
            );
            break;
        case "follow":
            toast.custom(
                <div className="text-white formBg px-4 py-4">
                    {
                        followMessages[
                            Math.floor(Math.random() * followMessages.length)
                        ]
                    }
                    <span className="font-bold text-[#A374FF]">
                        {" "}
                        +20 points!
                    </span>
                </div>
            );
            break;
        case "project":
            toast.custom(
                <div className="text-white formBg px-4 py-2">
                    {
                        projectMessages[
                            Math.floor(Math.random() * projectMessages.length)
                        ]
                    }
                    <span className="font-bold text-[#A374FF]">
                        {" "}
                        +20 points!
                    </span>
                </div>
            );
            break;
        case "contact":
            toast.custom(
                <div className="text-white formBg px-4 py-2">
                    {
                        emailMessages[
                            Math.floor(Math.random() * emailMessages.length)
                        ]
                    }
                    <span className="font-bold text-[#A374FF]">
                        {" "}
                        +20 points!
                    </span>
                </div>
            );

            break;
        case "copy":
            toast.custom(
                <div className="text-white formBg px-4 py-2">
                    {
                        copyMessages[
                            Math.floor(Math.random() * copyMessages.length)
                        ]
                    }
                    <span className="font-bold text-[#A374FF]">
                        {" "}
                        +20 points!
                    </span>
                </div>
            );
            break;
        case "reset":
            toast.custom(
                <div className="text-white formBg px-4 py-2">
                    Your score has been reset to
                    <span className="font-bold text-[#A374FF]"> 0 points!</span>
                </div>
            );
            break;
    }

    const audio = new Audio(sound);
    audio.play();
};
