import PropTypes from 'prop-types';

const Spots = ({spot}) => {
    const {_id} = spot;
    return (
        <div>
            <h1>{_id}</h1>
        </div>
    );
};
Spots.propTypes ={
    spot:PropTypes.object,
}
export default Spots;