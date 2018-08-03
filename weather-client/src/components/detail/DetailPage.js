import React, { Component } from 'react';
import { cities, weather } from '../../dictionarys';
import DetailDisplay from './DetailDisplay';

class DetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            data: {
                current: {},
                upcoming: {}
            },
        };
    }
    componentDidMount() {
        // need to use two endpoints to get both current weather and upcoming forecast
        const urls = [`http://${window.location.host}/api/forecast`, `http://${window.location.host}/api/single-current`]
        const requests = urls.map(url => fetch(url, {
            method: "post",
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify({id: cities[this.props.match.params.id].id}),
        }));
        Promise.all(requests)
            .then((res) =>{
                return Promise.all(res.map(data => data.json()));
            })
            .then((payload) => {
                this.setState({
                    isLoaded: true,
                    data: {
                        upcoming: payload[0],
                        current: payload[1]
                    }
                })
            });
    }

    render() {
        let backgroundStyles = {};

        // load background only after data has been retrieved
        if (this.state.isLoaded) {
            const weatherKey = this.state.data.current.weather[0].main.toLowerCase();
            backgroundStyles = {
                backgroundImage: `url(${weather[weatherKey].backgroundImage})`,
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                overflowY: "scroll"
            }
        }

        return (
            <div className="detailpage" style={backgroundStyles}>
                {!this.state.isLoaded ?
                    <h2 className="loading-message">Hang on, getting data...</h2>:
                    <DetailDisplay
                        current={this.state.data.current}
                        upcoming={this.state.data.upcoming}
                        city={cities[this.props.match.params.id]}
                    />}
            </div>
        );
    }
}

export default DetailPage;