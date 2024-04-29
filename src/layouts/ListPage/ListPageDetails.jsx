import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const ListPageDetails = ({ spot }) => {
    const { user } = useContext(AuthContext)
    const { _id, spotName, countryName, cost, email } = spot;

    if (user.email === email) {
        return (
            <div className="">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Spot Name</th>
                            <th>Country Name</th>
                            <th>Average Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className=''>
                            <td className='w-0 md:w-40'>{spotName}</td>
                            <td className='w-0 md:w-40'>{countryName}</td>
                            <td className='w-0 md:w-40'>{cost}</td>
                            <td className='w-0 md:w-40'>
                                <button className="btn bg-[#113065] text-white ">Update</button>
                                <button className="btn bg-[#113065] text-white ">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }


};
ListPageDetails.propTypes = {
    spot: PropTypes.object,
}
export default ListPageDetails;