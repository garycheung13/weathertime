import React from 'react';
import PropTypes from 'prop-types';
import * as momentTZ from 'moment-timezone';
import { weather } from '../../dictionaries';
import { findWeatherKey } from '../../utils';

const UpcomingForecastTile = ({forecast, tz}) => {
    const weatherObj = forecast.weather[0];
    return (
        <div className="tile">
            <h3>{momentTZ.unix(forecast.dt).tz(tz).format("dddd")}</h3>
            <img src={weather[findWeatherKey(weatherObj.main.toLowerCase())].icon} alt={weatherObj.description}/>
            <h4>{forecast.main.temp}&deg;F</h4>
        </div>
    );
};

UpcomingForecastTile.propTypes = {
    forecast: PropTypes.object.isRequired,
    tz: PropTypes.string.isRequired,
};

export default UpcomingForecastTile;