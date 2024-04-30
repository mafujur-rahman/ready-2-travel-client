
import { useEffect, useState } from "react";
import SingleCountry from "../SingleCountry/SingleCountry";


const Country = () => {

    const [countryData, setCountryData] = useState([])
 
    useEffect( ()=>{
        fetch('https://ready-2-travel-server.vercel.app/country')
        .then(res => res.json())
        .then(data => setCountryData(data))
    },[])

    return (
        <div className="mx-auto container my-14">
                <h2 className="text-4xl font-bold">Countries to visit</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                countryData.map(counrty => <SingleCountry key={counrty._id} country={counrty}></SingleCountry>)
            }
                </div>
            </div>
    );
};

export default Country;