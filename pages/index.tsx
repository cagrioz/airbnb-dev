import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Banner from '../components/Banner';
import Header from '../components/Header';

const Home: NextPage = () => {
    return (
        <div className="">
            <Head>
                <title>AirBnb</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <Banner />

            <main>
                <section>
                    <h2 className="text-4xl font-semibold">Explore Nearby</h2>
                </section>
            </main>
        </div>
    );
};

export default Home;
