import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const UpdateSpot = () => {

    const spot = useLoaderData();
    const { _id, img, spotName, countryName, location, description, cost, seasonality, travelTime, visitor } = spot || {};

    const handleUpdateSpot = e => {
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
        const updatedSpot = { img, spotName, countryName, location, description, cost, seasonality, travelTime, visitor}

        // send to the server
        fetch(`https://ready-2-travel-server.vercel.app/spot/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedSpot)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount > 0){
                    Swal.fire({
                        icon: "success",
                        title: "Update the spot",
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
                    <h3 className="text-4xl font-bold text-blue-500 mb-2">Update Spot</h3>
                    <div className="card shrink-0 w-full  shadow-2xl bg-blue-100">
                        <form onSubmit={ handleUpdateSpot } className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image URL</span>
                                </label>
                                <input type="text" defaultValue={img} name="photo" className="input input-bordered" required />
                            </div>
                            {/* /// */}
                            <div className="md:flex md:gap-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Tourist Spot Name</span>
                                    </label>
                                    <input type="text" defaultValue={spotName} name="spotName" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Country Name</span>
                                    </label>
                                    <input type="text" defaultValue={countryName} name="countryName" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="md:flex md:gap-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Location</span>
                                    </label>
                                    <input type="text" defaultValue={location} name="location" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Short Description</span>
                                    </label>
                                    <input type="text" defaultValue={description} name="description" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="md:flex md:gap-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Average Cost</span>
                                    </label>
                                    <input type="text" defaultValue={cost} name="cost" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seasonality</span>
                                    </label>
                                    <input type="text" defaultValue={seasonality} name="seasonality" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="md:flex md:gap-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Travel Time</span>
                                    </label>
                                    <input type="text" defaultValue={travelTime} name="travelTime" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Total Visitors Per Year</span>
                                    </label>
                                    <input type="text" defaultValue={visitor} name="visitor" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="form-control">
                                <button className="btn bg-blue-950 text-white">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateSpot;