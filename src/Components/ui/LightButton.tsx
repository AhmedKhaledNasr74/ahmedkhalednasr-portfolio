interface ButtonType {
    title: string;
}

const LightButton = ({ title }: ButtonType) => {
    return (
        <button className="p-[3px] relative w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-[#A374FF] to-[#5b38a2] rounded-lg" />
            <div className="px-8 py-2 bg-black-100 rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                {title}
            </div>
        </button>
    );
};

export default LightButton;
