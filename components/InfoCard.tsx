import Image from "next/image";

import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

const InfoCard = ({
    img,
    title,
    description,
    location,
    price,
    star,
    total,
}: {
    img: string;
    title: string;
    description: string;
    location: string;
    price: string;
    star: number;
    total: string;
}) => {
    return (
        <div className="items-center first:border-t flex py-7 px-2 border-b cursor-pointer ease-in-out hover:opacity-80 hover:shadow-lg transition duration-200">
            <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
                <Image src={img} layout="fill" objectFit="cover" className="rounded-2xl" />
            </div>

            <div className="flex flex-col flex-grow px-4 py-4">
                <div className="flex justify-between">
                    <p>{location}</p>
                    <HeartIcon className="h-7 cursor-pointer" />
                </div>

                <h4 className="text-xl">{title}</h4>

                <div className="border-b w-10 pt-2" />

                <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

                <div className="flex justify-between items-end pt-5">
                    <p className="flex items-center">
                        <StarIcon className="h-5 text-red-400" />
                        {star}
                    </p>

                    <div>
                        <p className="text-gray-500 text-lg font-semibold pb-2 lg:text-2xl">{price}</p>
                        <p className="text-gray-500 text-right font-extralight">{total}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;
