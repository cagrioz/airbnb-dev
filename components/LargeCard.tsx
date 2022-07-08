import Image from "next/image";

const LargeCard = ({
    img,
    title,
    description,
    buttonText,
}: {
    img: string;
    title: string;
    description: string;
    buttonText: string;
}) => {
    return (
        <section className="relative py-16 cursor-pointer">
            <div className="relative h-96 min-w-[300px]">
                <Image src={img} layout="fill" objectFit="cover" className="rounded-xl" />
            </div>

            <div className="absolute top-32 left-12">
                <h3 className="text-4xl mb-3 w-65">{title}</h3>
                <p className="text-gray-500">{description}</p>

                <button className="text-sm text-white bg-gray-900 mt-5 px-4 py-2 rounded-lg hover:scale-105 transition duration-200">
                    {buttonText}
                </button>
            </div>
        </section>
    );
};

export default LargeCard;
