import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';



import {BrowserRouter, Switch, Route} from 'react-router-dom';

import App from './App'

import store from "./Store";
import {Provider} from 'react-redux';

const router = (

        <Provider store={store}>

            <BrowserRouter >
                <Route  path='/'>

                    <App/>

                </Route>
            </BrowserRouter>

        </Provider>



        )


ReactDOM.render(router,
  document.getElementById('root')
);


serviceWorker.unregister();
