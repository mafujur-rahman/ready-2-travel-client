import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const ListPageDetails = ({ spot, setUserSpot, userSpot }) => {
    const { user } = useContext(AuthContext);
    const { _id, spotName, countryName, cost, email } = spot;

    const handleDeleteBtn = (_id) => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://ready-2-travel-server.vercel.app/spot/${_id}`,{
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = userSpot.filter(spot => spot._id !== _id);
                            setUserSpot(remaining)
                        }
                    })
            }
        });
    }

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
                                <Link to={`/update/${_id}`}><button className="btn bg-[#113065] text-white ">Update</button></Link>
                                <button onClick={() => handleDeleteBtn( _id )} className="btn bg-red-800 text-white ">Delete</button>
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
    setUserSpot: PropTypes.object,
    userSpot: PropTypes.object
}
export default ListPageDetails;