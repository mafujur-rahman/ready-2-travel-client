import { useLoaderData } from "react-router-dom";
import SingleSpot from "./SingleSpot";
import { useMemo, useState } from "react";



const AllTouristSpot = () => {
  const spots = useLoaderData();
  const [sortDirection, setSortDirection] = useState('asc');

  const sortedSpots = useMemo(() => {
    return spots.sort((a, b) => {
      if (sortDirection == 'asc') {
        return a.cost > b.cost ? 1 : -1;
      } else {
        return a.cost < b.cost ? 1 : -1;
      }
    });
  }, [spots, sortDirection]);

  const handleSort = () => {
    setSortDirection(sortDirection == 'asc' ? 'desc' : 'asc');
  };



  return (
    <div className="mt-10 mx-auto container ">
      <details className="dropdown">
        <summary className="m-1 btn bg-[#113065] text-white">Sort</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-[#113065] text-white rounded-box w-52">
          <li>
            <a onClick={handleSort}>by cost (ascending)</a>
          </li>
          <li>
            <a onClick={() => setSortDirection('desc')}>by cost (descending)</a>
          </li>
        </ul>
      </details>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10" >
        {
          sortedSpots.map(spot => <SingleSpot key={spot._id} spot={spot}></SingleSpot>)
        }
      </div>
    </div>
  );
};

export default AllTouristSpot;