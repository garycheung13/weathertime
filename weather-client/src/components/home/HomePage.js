import React, { Component } from 'react';
import HomeWeatherCard from './HomeWeatherCard';
import { cities } from '../../enums';

class HomePage extends Component {
    render() {
        return (
            <div className="homepage">
                <div className="container">
                    <h1>Weather Done Quick</h1>
                    <h2>Select a city to view more</h2>
                    <div className="cards">
                    {
                        Object.keys(cities).map(function(name, i){
                            return <HomeWeatherCard city={cities[name]} key={i}/>
                        })
                    }
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;