import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const HomeWeatherCard = ({city, current}) => {
    return (
        <Link to={{pathname: `/detail/${city.id}`, state: {current: current, city: city}}} className="card">
            <div className="card-text">
                <h3>{city.name}, {city.state}</h3>
            </div>
            <div className="card-icon">
                <img src="https://placehold.it/100x100" alt="placeholder"/>
            </div>
        </Link>
    );
};

HomeWeatherCard.propTypes = {
    city: PropTypes.object
};

export default HomeWeatherCard;