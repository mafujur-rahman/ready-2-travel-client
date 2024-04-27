import Swal from 'sweetalert2'
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";


const AddTouristSpot = () => {

    const { user } = useContext(AuthContext);

    const handleAddSpot = e => {
        e.preventDefault();
        const form = e.target;
        const img = form.photo.value;
        const spotName = form.spotName.value;
        const countryName = form.countryName.value;
        const location = form.location.value;
        const description = form.description.value;
        const cost = form.cost.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.travelTime.value;
        const visitor = form.visitor.value;
        const email = form.email.value;
        const name = form.name.value;
        const newSpot = { img, spotName, countryName, location, description, cost, seasonality, travelTime, visitor, email, name }
        console.log(newSpot);
        // send to the server
        fetch('http://localhost:5000/spot', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newSpot)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        icon: "success",
                        title: "Added a new spot",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
        
    }

    return (
        <div>
            <div className="hero  min-h-screen bg-blue-200">
                <div className="hero-content flex-col animate__animated animate__backInUp">
                    <h3 className="text-4xl font-bold text-blue-500 mb-2">Add Tourist Spot </h3>
                    <div className="card shrink-0 w-full  shadow-2xl bg-blue-100">
                        <form onSubmit={handleAddSpot} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image URL</span>
                                </label>
                                <input type="text" placeholder="Enter image url" name="photo" className="input input-bordered" required />
                            </div>
                            {/* /// */}
                            <div className="md:flex md:gap-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Tourist Spot Name</span>
                                    </label>
                                    <input type="text" placeholder="Enter spot name" name="spotName" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Country Name</span>
                                    </label>
                                    <input type="text" placeholder="Enter country name" name="countryName" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="md:flex md:gap-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Location</span>
                                    </label>
                                    <input type="text" placeholder="Enter spot location" name="location" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Short Description</span>
                                    </label>
                                    <input type="text" placeholder="description" name="description" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="md:flex md:gap-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Average Cost</span>
                                    </label>
                                    <input type="text" placeholder="Average cost" name="cost" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seasonality</span>
                                    </label>
                                    <input type="text" placeholder="Summer/Winter" name="seasonality" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="md:flex md:gap-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Travel Time</span>
                                    </label>
                                    <input type="text" placeholder="travel time" name="travelTime" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Total Visitors Per Year</span>
                                    </label>
                                    <input type="text" placeholder="total visitor" name="visitor" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Email</span>
                                </label>
                                <input type="email" placeholder="Enter your email" name="email" className="input input-bordered" defaultValue={user.email} required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input type="text" placeholder="Enter your full name" name="name" className="input input-bordered" defaultValue={user.displayName} required />
                            </div>

                            <div className="form-control">
                                <button className="btn bg-blue-950 text-white">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTouristSpot;