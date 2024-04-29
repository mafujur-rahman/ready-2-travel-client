import { useLoaderData } from "react-router-dom";
import ListPageDetails from "./ListPageDetails";


const ListPage = () => {
    const userSpot = useLoaderData();
    
    return (
        <div className="mx-auto container my-10 ">
            {
                userSpot.map(spot => <ListPageDetails key={spot._id} spot={spot}></ListPageDetails>)
            }
        </div>
    );
};

export default ListPage;