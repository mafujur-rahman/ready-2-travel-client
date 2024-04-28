import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Spots from "./Spots/Spots";
import PerfectTrip from "./PerfectTrip/PerfectTrip";
import Holidays from "./Holidays/Holidays";
import Country from "./Country/Country";
import DarkModeToggle from "react-dark-mode-toggle";
import { useState } from "react";


const Home = () => {
    const spots = useLoaderData();
    const [isDarkMode, setIsDarkMode] = useState(() => false);
    return (
        <div style={{
            backgroundColor: isDarkMode ? "gray" : "white",
            color: isDarkMode ? "black" : "#113065"
        }}>

            <DarkModeToggle
                onChange={setIsDarkMode}
                checked={isDarkMode}
                size={80}
            />

            <Banner></Banner>
            <div className="mx-auto container mt-[350px] md:mt-[600px] lg:mt-[800px]">
                <h2 className="text-4xl font-bold">Featured Spots</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        spots.map(spot => <Spots key={spot._id} spot={spot}></Spots>)
                    }
                </div>
            </div>
            <PerfectTrip></PerfectTrip>
            <Country></Country>
            <Holidays></Holidays>
        </div>
    );
};

export default Home;