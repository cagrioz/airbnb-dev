export async function getServerSideProps(context: any) {
    let searchResults: SearchItem[] = [];

    try {
        const res = await fetch("https://links.papareact.com/isz");
        if (!res.ok) throw new Error("API request failed");
        searchResults = await res.json();
    } catch (error) {
        console.error("Failed to fetch search results. Using fallback data.", error);
        
        // Fallback data
        searchResults = [
            {
                "img": "https://links.papareact.com/xqj",
                "location": "Private room in center of London",
                "title": "Stay at this spacious Edwardian House",
                "description": "1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine",
                "star": 4.73,
                "price": "£39 / night",
                "total": "£152 total",
                "long": -0.0022275,
                "lat": 51.5421655
            },
            {
                "img": "https://links.papareact.com/hz2",
                "location": "Private room in center of London",
                "title": "Independent luxury apartment",
                "description": "2 guest · 3 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen",
                "star": 4.3,
                "price": "£40 / night",
                "total": "£157 total",
                "long": -0.095091,
                "lat": 51.48695
            },
            {
                "img": "https://links.papareact.com/uz7",
                "location": "Private room in center of London",
                "title": "London Studio Apartments",
                "description": "4 guest · 4 bedroom · 4 bed · 2 bathrooms · Wifi · Kitchen · Free parking · Washing Machine",
                "star": 3.8,
                "price": "£35 / night",
                "total": "£207 total",
                "long": -0.135638,
                "lat": 51.521916
            },
            {
                "img": "https://links.papareact.com/6as",
                "location": "Private room in center of London",
                "title": "30 mins to Oxford Street, Excel London",
                "description": "1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine",
                "star": 4.2,
                "price": "£38 / night",
                "total": "£160 total",
                "long": -0.150464,
                "lat": 51.579245
            }
        ];
    }

    return {
        props: {
            searchResults,
        },
    };
}
