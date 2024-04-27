import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Spots from "./Spots/Spots";


const Home = () => {
    const spots = useLoaderData();
    return (
        <>
            
            <Banner></Banner>
            <div className="mx-auto container mt-[800px]">
                <h2 className="text-4xl font-bold">Featured Spots</h2>
                {
                    spots.map(spot => <Spots key={spot._id} spot={spot}></Spots> )
                }
            </div>
        </>
    );
};

export default Home;