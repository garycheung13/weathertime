import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as momentTZ from 'moment-timezone';
import { weather } from '../../dictionaries';
import { findWeatherKey } from '../../utils';

const HomeWeatherCard = ({city, current, cityKey, epoch}) => {
    const weatherKey = findWeatherKey(current.weather[0].main.toLowerCase());

    const backgroundStyles = {
        backgroundImage: `url(${weather[weatherKey].backgroundImage})`
    }

    return (
        <Link to={`/detail/${cityKey}`} className="card" style={backgroundStyles}>
            <div className="card-text">
                <h3>{city.name}, {city.state}</h3>
                <h4 className="card-text__time">Local Time: {momentTZ(epoch).tz(city.tz).format('h:mm a')}</h4>
                <h2>{current.main.temp}&deg;F</h2>
                <h4>{current.weather[0].description}</h4>
            </div>
            <div className="card-icon">
                <img src={weather[weatherKey].icon} alt={current.weather[0].description}/>
            </div>
        </Link>
    );
};

HomeWeatherCard.propTypes = {
    city: PropTypes.object,
    current: PropTypes.object,
    cityKey: PropTypes.string,
    epoch: PropTypes.number.isRequired,
};

export default HomeWeatherCard;