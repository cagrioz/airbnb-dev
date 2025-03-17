import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";
import { format } from "date-fns";
import { SearchItem, Coord } from "../interfaces";

const Search = ({ searchResults }: { searchResults: SearchItem[] }): JSX.Element => {
    const router = useRouter();
    const { location, startDate, endDate, noOfGuests } = router.query;

    // Handle date formatting safely
    const formattedStartDate = startDate ? format(new Date(startDate as string), "dd MMMM yy") : "Unknown";
    const formattedEndDate = endDate ? format(new Date(endDate as string), "dd MMMM yy") : "Unknown";
    const range = `${formattedStartDate} - ${formattedEndDate}`;

    return (
        <div>
            <Header
                placeholder={`${location || "Unknown Location"} | ${range} | ${noOfGuests || "1"} ${
                    parseInt(noOfGuests as string) > 1 ? "People" : "Person"
                }`}
            />

            <main className="flex mb-10">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs">
                        300+ Stays - {range} - for {noOfGuests} guests
                    </p>

                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location || "Unknown"}</h1>

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

                <section className="hidden xl:inline-flex xl:min-w-[600px]">
                    <Map
                        searchResults={searchResults}
                        coords={searchResults.map(({ lat, long }) => ({ latitude: lat, longitude: long })) as Coord[]}
                    />
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Search;

// 🔹 Always use static sample data (No API calls)
export async function getServerSideProps() {
    const searchResults: SearchItem[] = [
        {
            img: "https://links.papareact.com/xqj",
            location: "Private room in center of London",
            title: "Stay at this spacious Edwardian House",
            description: "1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine",
            star: 4.73,
            price: "£39 / night",
            total: "£152 total",
            long: -0.0022275,
            lat: 51.5421655,
        },
        {
            img: "https://links.papareact.com/hz2",
            location: "Private room in center of London",
            title: "Independent luxury apartment",
            description: "2 guest · 3 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen",
            star: 4.3,
            price: "£40 / night",
            total: "£157 total",
            long: -0.095091,
            lat: 51.48695,
        },
        {
            img: "https://links.papareact.com/uz7",
            location: "Private room in center of London",
            title: "London Studio Apartments",
            description: "4 guest · 4 bedroom · 4 bed · 2 bathrooms · Wifi · Kitchen · Free parking · Washing Machine",
            star: 3.8,
            price: "£35 / night",
            total: "£207 total",
            long: -0.135638,
            lat: 51.521916,
        },
        {
            img: "https://links.papareact.com/6as",
            location: "Private room in center of London",
            title: "30 mins to Oxford Street, Excel London",
            description: "1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine",
            star: 4.2,
            price: "£38 / night",
            total: "£160 total",
            long: -0.150464,
            lat: 51.579245,
        },
    ];

    return {
        props: {
            searchResults,
        },
    };
}
