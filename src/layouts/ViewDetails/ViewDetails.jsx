import { useLoaderData } from "react-router-dom";


const ViewDetails = () => {

    const spot = useLoaderData();
    const { img, spotName, countryName, location, description, cost, seasonality, travelTime, visitor } = spot || {};
    return (
        <div className="mx-auto container rounded-2xl mt-10 lg:border-2 lg:border-gray-300 mb-16">
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row gap-20">
                    <img src={img} className="max-w-sm h-auto rounded-lg " />
                    <div>
                        <h1 className="text-5xl font-bold">{spotName}</h1>
                        <p className="py-6">{description}</p>
                        <p className='border-dotted border-b-2 border-gray-300 mb-4'></p>

                        <p><span className='text-xl font-medium'>Country:</span> <span className='text-gray-600'>{countryName}</span></p>
                        <p><span className='text-xl font-medium'>Location:</span> <span className='text-gray-600'>{location}</span></p>
                        <p className='border-dotted border-b-2 border-gray-300 my-4'></p>
                        <p><span className='text-xl font-medium'>Seasonality:</span> <span className='text-gray-600'>{seasonality}</span></p>
                        <p><span className='text-xl font-medium'>Travel time:</span> <span className='text-gray-600'>{travelTime}</span></p>
                        <p className='border-dotted border-b-2 border-gray-300 my-4'></p>
                        <p><span className='text-xl font-medium'>Visitor:</span> <span className='text-gray-600'>{visitor}</span></p>
                        <p><span className='text-xl font-medium'>Cost:</span> <span className='text-gray-600'>{cost}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;