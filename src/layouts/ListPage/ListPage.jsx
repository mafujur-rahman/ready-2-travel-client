import { useLoaderData } from "react-router-dom";
import ListPageDetails from "./ListPageDetails";
import { useState } from "react";


const ListPage = () => {
    const loadedUserSpot = useLoaderData();
    const[userSpot, setUserSpot] =useState(loadedUserSpot)
    
    return (
        <div className="mx-auto container my-10 ">
            {
                userSpot.map(spot => <ListPageDetails 
                    key={spot._id}
                    spot={spot}
                    userSpot={userSpot}
                    setUserSpot={setUserSpot}
                     ></ListPageDetails>)
            }
        </div>
    );
};

export default ListPage;