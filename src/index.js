import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import './Styles/index.css';
import * as serviceWorker from './serviceWorker';
import App from './App'
import store from "./Store";

/* entry point of my application  */
const router = (
        <Provider store = {store}>
            <BrowserRouter>
                <Route path = '/'>
                    <App/>
                </Route>
            </BrowserRouter>
        </Provider>
)
ReactDOM.render(router, document.getElementById('root'));
serviceWorker.unregister();
