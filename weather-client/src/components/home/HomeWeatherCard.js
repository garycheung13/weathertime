import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { weather } from '../../dictionarys';

const HomeWeatherCard = ({city, current, cityKey}) => {
    const weatherKey = current.weather[0].main.toLowerCase();
    const backgroundStyles = {
        backgroundImage: `url(${weather[weatherKey].backgroundImage})`
    }
    return (
        <Link to={{
            pathname: `/detail/${cityKey}`,
            state: {current: current, city: city},
        }} className="card" style={backgroundStyles}>
            <div className="card-text">
                <h3>{city.name}, {city.state}</h3>
                <h4 className="card-text__time">Local Time: </h4>
                <h2>{current.main.temp}&deg;F</h2>
                <h4>{current.weather[0].description}</h4>
            </div>
            <div className="card-icon">
                <img src={weather[weatherKey].icon} alt="placeholder"/>
            </div>
        </Link>
    );
};

HomeWeatherCard.propTypes = {
    city: PropTypes.object,
    current: PropTypes.object,
    cityKey: PropTypes.string,
};

export default HomeWeatherCard;