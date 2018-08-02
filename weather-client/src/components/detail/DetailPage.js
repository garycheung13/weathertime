import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DetailPage extends Component {
    componentDidMount() {
        fetch(`http://${window.location.host}/api/forecast`, {
            method: "post",
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify({id: this.props.location.state.city.id}),
        }).then(function(res){
            return res.json();
        }).then(function(payload){
            console.log(payload);
        })
    }

    render() {
        const cityDetails = this.props.location.state.city;
        const cityCurrentWeather = this.props.location.state.current;
        return (
            <div className="detailpage">
                <div className="container">
                    <Link to="/">Back to Overview</Link>
                    <div>
                        <h1>{`${cityDetails.name}, ${cityDetails.state}`}</h1>
                        <h3>Current Weather</h3>
                        <h1>{cityCurrentWeather.main.temp}&deg;F</h1>
                        <h3>{cityCurrentWeather.weather[0].description}</h3>
                    </div>
                    <div>
                        <h3>Upcoming Forecast</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailPage;