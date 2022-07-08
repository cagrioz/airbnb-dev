const Footer = () => {
    return (
        <footer className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="uppercase font-semibold">About</h5>
                <ul className="space-y-4">
                    <li>How Airbnb works</li>
                    <li>Newsroom</li>
                    <li>Investors</li>
                    <li>Airbnb Plus</li>
                    <li>Airbnb Luxe</li>
                </ul>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="uppercase font-semibold">Community</h5>
                <ul className="space-y-4">
                    <li>Accesibility</li>
                    <li>This is not a real site</li>
                    <li>Perfect clone</li>
                    <li>Extremely clean</li>
                    <li>Wondefully coded</li>
                </ul>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="uppercase font-semibold">Host</h5>
                <ul className="space-y-4">
                    <li>Cagri</li>
                    <li>Ozarpaci</li>
                    <li>TypeScript</li>
                    <li>React.js</li>
                    <li>Next.js</li>
                </ul>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="uppercase font-semibold">Support</h5>
                <ul className="space-y-4">
                    <li>Github</li>
                    <li>Help Centre</li>
                    <li>Trust & Safety</li>
                    <li>Winner wins</li>
                    <li>Developer</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
