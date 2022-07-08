export interface SearchItem {
    img: string;
    location: string;
    title: string;
    description: string;
    star: number;
    price: string;
    total: string;
    long?: number | string;
    lat?: number | string;
}

export interface Coord {
    latitude: number;
    longitude: number;
}
