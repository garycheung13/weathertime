import React from 'react';
import PropTypes from 'prop-types';

import { weather } from '../../dictionarys';

const UpcomingForecastTile = ({forecast}) => {
    console.log(forecast);
    const weatherObj = forecast.weather[0];
    return (
        <div className="tile">
            <img src={weather[weatherObj.main.toLowerCase()].icon} alt={weatherObj.description}/>
            <h4>{forecast.main.temp}&deg;F</h4>
        </div>
    );
};

UpcomingForecastTile.propTypes = {
    forecast: PropTypes.object.isRequired
};

export default UpcomingForecastTile;