import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';

import 'normalize.css'; // resets
import './styles/css/index.css';
import App from './components/App';

ReactDOM.render(
    <BrowserRouter>
        <Route path='/' component={App}/>
    </BrowserRouter>,
    document.getElementById('root')
);

