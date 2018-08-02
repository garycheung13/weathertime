import React, { Component } from 'react';
import HomeWeatherCard from './HomeWeatherCard';
import { cities } from '../../enums';

class HomePage extends Component {
    componentDidMount() {
        fetch("api/single-current", {
            method: "post",
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify({id: 4990729}),
        }).then(function(res){
            console.log(res);
            return res.json();
        }).then(function(payload){
            console.log(payload);
        })
    }

    render() {
        return (
            <div className="homepage">
                <div className="container">
                    <h1>Weather Done Quick</h1>
                    <h2>Select a city for more details</h2>
                    <div className="cards">
                    {
                        Object.keys(cities).map(function(name, i){
                            return <HomeWeatherCard city={cities[name]} current="78" key={i}/>
                        })
                    }
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;