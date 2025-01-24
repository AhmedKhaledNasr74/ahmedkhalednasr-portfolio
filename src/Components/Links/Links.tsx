import { FloatingDock } from "../ui/FloatingLinks";
import {
    BriefcaseBusiness,
    Code,
    GithubIcon,
    Linkedin,
    XIcon,
} from "lucide-react";

const Links = () => {
    const links = [
        {
            title: "Twitter",
            icon: <XIcon className="h-full w-full text-white" />,
            href: "https://x.com/ahmedkhaled74a?t=_zeNf_4fg_lAafBAV6eXBQ&s=09",
        },
        {
            title: "GitHub",
            icon: <GithubIcon className="h-full w-full text-white" />,
            href: "https://github.com/AhmedKhaledNasr74",
        },
        {
            title: "Linkedin",
            icon: <Linkedin className="h-full w-full text-white" />,
            href: "https://www.linkedin.com/in/ahmed-khaled-a33170223",
        },
        {
            title: "Codeforces",
            icon: <Code className="h-full w-full text-white" />,
            href: "https://codeforces.com/profile/ahmedkhaled74",
        },
        {
            title: "Portfolio",
            icon: <BriefcaseBusiness className="h-full w-full text-white" />,
            href: "#",
        },
    ];
    return (
        <div className="links" id="Links">
            <div className="flex items-center justify-center  md:h-full  w-full ">
                <FloatingDock
                    items={links}
                    desktopClassName="mt-36"
                    mobileClassName="mt-20"
                />
            </div>
        </div>
    );
};

export default Links;
