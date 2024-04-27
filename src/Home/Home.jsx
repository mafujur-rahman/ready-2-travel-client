import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Spots from "./Spots/Spots";


const Home = () => {
    const spots = useLoaderData();
    return (
        <>
            
            <Banner></Banner>
            <div className="mx-auto container mt-[350px] md:mt-[600px] lg:mt-[800px]">
                <h2 className="text-4xl font-bold">Featured Spots</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    spots.map(spot => <Spots key={spot._id} spot={spot}></Spots> )
                }
                </div>
            </div>
        </>
    );
};

export default Home;