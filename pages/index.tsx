import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

interface ExploreData {
    img: string;
    location: string;
    distance: string;
}

interface CardData {
    img: string;
    title: string;
}

const Home = ({ exploreData, cardsData }: { exploreData: ExploreData[]; cardsData: CardData[] }) => {
    return (
        <div>
            <Head>
                <title>AirBnb</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <Banner />

            <main className="max-w-7xl mx-auto px-8 sm:px-16">
                <section className="pt-6">
                    <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {exploreData.map(({ img, distance, location }) => (
                            <SmallCard key={img} img={img} location={location} distance={distance} />
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

                    <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
                        {cardsData.map(({ img, title }) => (
                            <MediumCard key={img} img={img} title={title} />
                        ))}
                    </div>
                </section>

                <LargeCard
                    img="https://links.papareact.com/4cj"
                    title="The Greatest Outdoors"
                    description="Wishlists curated by Airbnb."
                    buttonText="Get Inspired"
                />
            </main>

            <Footer />
        </div>
    );
};

export default Home;

// 🔹 Using only static data (No API calls)
export async function getStaticProps() {
    const exploreData: ExploreData[] = [
        { img: "https://links.papareact.com/5j2", location: "London", distance: "45-minute drive" },
        { img: "https://links.papareact.com/1to", location: "Manchester", distance: "4-hour drive" },
        { img: "https://links.papareact.com/qpx", location: "Liverpool", distance: "3.5-hour drive" },
        { img: "https://links.papareact.com/kji", location: "York", distance: "4-hour drive" },
        { img: "https://links.papareact.com/2io", location: "Cardiff", distance: "45-minute drive" },
        { img: "https://links.papareact.com/ikq", location: "Birkenhead", distance: "4.5-hour drive" },
        { img: "https://links.papareact.com/3h5", location: "Newquay", distance: "6-hour drive" },
        { img: "https://links.papareact.com/9og", location: "Hove", distance: "2-hour drive" },
    ];

    const cardsData: CardData[] = [
        { img: "https://links.papareact.com/2io", title: "Outdoor getaways" },
        { img: "https://links.papareact.com/q7j", title: "Unique stays" },
        { img: "https://links.papareact.com/s03", title: "Entire homes" },
        { img: "https://links.papareact.com/8ix", title: "Pet-friendly stays" },
    ];

    return {
        props: {
            exploreData,
            cardsData,
        },
    };
}
