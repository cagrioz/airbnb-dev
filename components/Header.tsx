import Image from "next/image";

import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from "@heroicons/react/solid";

import { useState } from "react";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

const Header = ({ placeholder = undefined }: { placeholder?: string }): JSX.Element => {
    const [search, setSearch] = useState("");

    const [startDate, setStartDate]: [Date, (date: Date) => void] = useState<Date>(new Date());
    const [endDate, setEndDate]: [Date, (date: Date) => void] = useState<Date>(new Date());

    const [noOfGuests, setNoOfGuests]: [number, (noOfGuests: number) => void] = useState(1);

    const router = useRouter();

    const onChangeGuests = (e: any) => {
        setNoOfGuests(+e?.target?.value ?? 1);

        // Safely update the query object
        if (+e?.target?.value < 1) {
            setNoOfGuests(1);
        }
    };

    const searchRooms = (e: any) => {
        e.preventDefault();

        router.push({
            pathname: "/search",
            query: {
                location: search,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuests: noOfGuests,
            },
        });
    };

    const searchRoomsOnEnter = (e: any) => {
        if (e?.keyCode === 13 || e.which === 13) {
            searchRooms(e);
        }
    };

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    const handleSelect = (ranges: any): void => {
        setStartDate(ranges?.selection?.startDate);
        setEndDate(ranges?.selection?.endDate);
    };

    const resetInput = (): void => {
        setSearch("");
    };

    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
            {/* Left */}
            <div onClick={() => router.push("/")} className="relative flex items-center h-10 cursor-pointer">
                <Image
                    src="https://links.papareact.com/qd3"
                    alt="AirBnb"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>

            {/* Middle - Search Bar */}
            <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
                <input
                    value={search}
                    onKeyPress={searchRoomsOnEnter}
                    onChange={(e): void => setSearch(e?.target?.value)}
                    className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
                    type="text"
                    placeholder={placeholder || "Start your search"}
                />
                <SearchIcon
                    onClick={searchRooms}
                    className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2"
                />
            </div>

            {/* Right */}
            <div className="flex space-x-4 items-center justify-end text-gray-500">
                <p className="hidden md:inline cursor-pointer">Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer" />

                <div className="flex items-center space-x-2 border-2 rounded-full p-2 cursor-pointer">
                    <MenuIcon className="h-6" />
                    <UserCircleIcon className="h-6" />
                </div>
            </div>

            {search && (
                <div className="flex flex-col col-span-3 mx-auto mt-6">
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={["#FD5B61"]}
                        onChange={handleSelect}
                    />
                    <div className="flex items-center border-b pb-1 mx-3">
                        <h2 className="text-2xl flex-grow font-semibold">Number Of Guests</h2>
                        <UsersIcon className="h-5" />
                        <input
                            type="number"
                            className="w-12 pl-2 text-lg text-red-400 outline-none"
                            value={noOfGuests}
                            onChange={onChangeGuests}
                            min={1}
                        />
                    </div>

                    <div className="flex pt-4">
                        <button onClick={resetInput} className="flex-grow text-gray-500">
                            Cancel
                        </button>
                        <button onClick={searchRooms} className="flex-grow text-red-400">
                            Search
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
