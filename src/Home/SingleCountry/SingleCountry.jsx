import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const SingleCountry = ({ country }) => {
    const { _id, img, countryName, description } = country;
    return (
        <NavLink to={`/country-spot/${_id}`}>
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{countryName}</h2>
                <p>{description}</p>
            </div>
        </div>
        </NavLink>
    );
};
SingleCountry.propTypes = {
    country: PropTypes.object,
}
export default SingleCountry;