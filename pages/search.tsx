import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { format } from "date-fns";
import InfoCard from "../components/InfoCard";

interface SearchItem {
    img: string;
    location: string;
    title: string;
    description: string;
    star: number;
    price: string;
    total: string;
    lang?: number | string;
    lat?: number | string;
}

const Search = ({ searchResults }: { searchResults: SearchItem[] }): JSX.Element => {
    const router = useRouter();

    // Destructuring the router query object
    const { location, startDate, endDate, noOfGuests } = router.query;

    const formattedStartDate = format(new Date(startDate as string), "dd MMMM yy");
    const formattedEndDate = format(new Date(endDate as string), "dd MMMM yy");

    const range = `${formattedStartDate} - ${formattedEndDate}`;

    return (
        <div>
            <Header
                placeholder={`${location} | ${range} | ${noOfGuests} ${
                    parseInt(noOfGuests as string) > 1 ? "People" : "Person"
                }`}
            />

            <main className="flex mb-10">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs">
                        300+ Stays - {range} - for {noOfGuests} number of guests
                    </p>

                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>

                    <div className="hidden md:inline-flex space-x-3 mb-5 text-gray-800 whitespace-nowrap">
                        <p className="button">Cancellation Flexibility</p>
                        <p className="button">Type of Place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and Beds</p>
                        <p className="button">More filters</p>
                    </div>

                    <div className="flex flex-col">
                        {searchResults.map(({ img, title, description, location, price, star, total }) => (
                            <InfoCard
                                key={img}
                                img={img}
                                title={title}
                                description={description}
                                location={location}
                                price={price}
                                star={star}
                                total={total}
                            />
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Search;

// Typescript, server-side rendering
export async function getServerSideProps(context: any) {
    const searchResults: SearchItem[] = await fetch("https://links.papareact.com/isz").then((res) => res.json());

    return {
        props: {
            searchResults,
        },
    };
}
