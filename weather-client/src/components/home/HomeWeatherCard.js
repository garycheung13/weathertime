import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const HomeWeatherCard = ({city}) => {
    return (
        <Link to={`/detail/${city.id}`} className="card">
            <div className="card-text">
                {city.name}
            </div>
            <div className="card-icon">
                <img src="https://placehold.it/100x100" alt="" srcset=""/>
            </div>
        </Link>
    );
};

HomeWeatherCard.propTypes = {
    city: PropTypes.object
};

export default HomeWeatherCard;