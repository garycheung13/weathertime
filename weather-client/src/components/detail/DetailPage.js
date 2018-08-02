import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DetailPage extends Component {
    render() {
        return (
            <div className="detailpage">
                <div className="container">
                    <Link to="/">Back to Overview</Link>
                    <p>Hello World from detail page: {this.props.match.params.id}</p>
                </div>
            </div>
        );
    }
}

export default DetailPage;