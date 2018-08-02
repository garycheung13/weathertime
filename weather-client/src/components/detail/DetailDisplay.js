import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UpcomingForecastTile from './UpcomingForecastTile';
import { weather } from '../../dictionarys';
import * as momentTZ from 'moment-timezone';

const DetailDisplay = ({current, upcoming, city}) => {
    const weatherKey = current.weather[0].main.toLowerCase();
    console.log(momentTZ.tz(momentTZ(), "America/Toronto").format('HH:MM'));

    return (
        <div className="container detail">
            <div className="detail-main">
            <Link to="/">&larr; Back to Overview</Link>
                <h2>{`${city.name}, ${city.state}`}</h2>
                <h3>Current Weather</h3>
                <div className="detail-main__degree">
                    <h1>{current.main.temp}&deg;F</h1>
                    <img src={weather[weatherKey].icon} alt="placeholder" className="icon"/>
                </div>
                <h3>{current.weather[0].description}</h3>
                <div>
                    <h3>Upcoming Forecast</h3>
                    {

                    }
                </div>
            </div>
            <div className="detail-secondary">
                <ul>
                    <li>Local Time: </li>
                    <li>Humidity: {current.main.humidity}%</li>
                    <li>Wind Speed: {current.wind.speed} MPH</li>
                    <li><br/><br/>High: {current.main.temp_max}&deg;F</li>
                    <li>Low: {current.main.temp_min}&deg;F</li>
                </ul>
            </div>
        </div>
    );
};

DetailDisplay.propTypes = {
    city: PropTypes.object.isRequired,
    current: PropTypes.object.isRequired,
    upcoming: PropTypes.object.isRequired,
};

export default DetailDisplay;