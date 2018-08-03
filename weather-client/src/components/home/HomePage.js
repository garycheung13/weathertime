import React, { Component } from 'react';
import HomeWeatherCard from './HomeWeatherCard';
import { cities } from '../../dictionaries';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            data: [],
            cityKeys: Object.keys(cities),
        };
    }

    componentDidMount() {
        // create array of cities to use with multi-city weather api call
        const cityIDs = this.state.cityKeys.map(function(name){
            return cities[name].id;
        });
        // fetch the current weather data after initial mount
        fetch("api/group-current", {
            method: "post",
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify({ids: cityIDs}),
        })
        .then((res) => res.json())
        .then((payload) => {
            this.setState({
                isLoaded: true,
                data: payload.list
            });
        });
    }

    render() {
        // get the epoch up here, so each iteration in .map isn't off by a few millisecond
        const currentEpoch = new Date().getTime();

        return (
            <div className="homepage">
                <div className="container">
                    <h1>Weathertime</h1>
                    <h2>Select a city to view forecast details</h2>
                    <div className="cards">
                    {
                        this.state.cityKeys.map((name, i) => {
                            if (!this.state.isLoaded){
                                return <p key={i}>loading...</p>
                            } else {
                                return <HomeWeatherCard
                                    city={cities[name]}
                                    current={this.state.data[i]}
                                    cityKey={name}
                                    epoch={currentEpoch}
                                    key={i}/>
                            }
                        })
                    }
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;