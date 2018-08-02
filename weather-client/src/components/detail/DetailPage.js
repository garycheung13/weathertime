import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DetailPage extends Component {
    componentDidMount() {
        fetch(`http://${window.location.host}/api/single-current`, {
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
                    <h1>{`${cityDetails.name}, ${cityDetails.state}`}</h1>
                    <h3>Current Weather</h3>
                    <h1>{cityCurrentWeather}</h1>
                    {/* <p>Hello World from detail page: {this.props.match.params.id}</p> */}

                </div>
            </div>
        );
    }
}

export default DetailPage;