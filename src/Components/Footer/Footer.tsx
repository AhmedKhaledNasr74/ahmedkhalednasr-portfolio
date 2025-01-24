import Links from "../Links/Links";
const Footer = () => {
    return (
        <footer className="w-full pt-20 -translate-y-20  flex flex-col justify-center bg-grid-white/[0.02]">
            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw] text-white">
                    Ready to take <span className="text-[#A374FF]">your</span>{" "}
                    digital presence to the next level?
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">
                    Reach out to me today and let&apos;s discuss how I can help
                    you achieve your goals.
                </p>
                <Links />
            </div>
            <div className="text-center">
                <p className="md:text-base text-sm md:font-normal font-light text-white-100">
                    Copyright © 2024 Ahmed Khaled
                </p>
            </div>
        </footer>
    );
};

export default Footer;
