import { useLoaderData } from "react-router-dom";
import SingleSpot from "./SingleSpot";



const AllTouristSpot = () => {
    const spots = useLoaderData();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto container" >
            {
                spots.map(spot => <SingleSpot key={spot._id} spot={spot}></SingleSpot>)
            }
        </div>
    );
};

export default AllTouristSpot;