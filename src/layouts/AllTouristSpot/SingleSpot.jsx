import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SingleSpot = ({spot}) => {
    const { _id, img, spotName, cost, visitor,travelTime, seasonality } = spot;
    return (
        <div className="card w-96 bg-base-100 mt-10 border-2 border-gray-300">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{spotName}</h2>
                <p><span className='text-xl font-medium'>Seasonality:</span> <span className='text-gray-600'>{seasonality}</span></p>
                <p className='border-dotted border-b-2 border-gray-300 mb-4'></p>
                <p className='border-dotted border-b-2 border-gray-300  mb-4'></p>
                <p><span className='text-xl font-medium'>Visitor:</span> <span className='text-gray-600'>{visitor}</span></p>
                <p><span className='text-xl font-medium'>Travel time:</span> <span className='text-gray-600'>{travelTime}</span></p>
                <p><span className='text-xl font-medium'>Cost:</span> <span className='text-gray-600'>{cost}</span></p>
                <div className="card-actions">
                    <Link to={`/view-details/${_id}`}><button className="btn bg-[#113065] text-white">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};
SingleSpot.propTypes = {
    spot: PropTypes.object,
}
export default SingleSpot;