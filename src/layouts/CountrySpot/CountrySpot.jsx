import { Link, useLoaderData } from "react-router-dom";


const CountrySpot = () => {

    const spot = useLoaderData();
    const { _id, spotName, countryName, location, description, cost, seasonality } = spot ;

    return (
        <div className="card w-96 mx-auto container rounded-2xl mt-10 lg:border-2 lg:border-gray-300 mb-16">
            <div className="card-body">
                <h2 className="card-title">{spotName}</h2>
                <p><span className='text-xl font-medium'>Country:</span> <span className='text-gray-600'>{countryName}</span></p>
                <p>{description}</p>
                <p className='border-dotted border-b-2 border-gray-300 mt-2'></p>
                <p className='border-dotted border-b-2 border-gray-300 mb-4'></p>
                <p><span className='text-xl font-medium'>Location:</span> <span className='text-gray-600'>{location}</span></p>
                <p><span className='text-xl font-medium'>Seasonality:</span> <span className='text-gray-600'>{seasonality}</span></p>
                <p><span className='text-xl font-medium'>Travel time:</span> <span className='text-gray-600'>{cost}</span></p>
                <div className="card-actions ">
                    <Link to={`/view-details/${_id}`}><button className="btn bg-[#113065] text-white">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CountrySpot;