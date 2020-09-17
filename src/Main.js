import React from 'react';
import {Link} from "react-router-dom";
import {HashRouter, Route} from 'react-router-dom';

import './Styles/Style.css'
import './Styles/facyFontsandMore.css'
import './Styles/animations.css'
import Single from "./Single";
import PhotoGrid from "./PhotoGrid";

/* routes the app in two paths */
class Main extends React.Component {
    render() {
        return (
            <HashRouter>
                <h1> <Link to = '/'> Reduxstagram </Link> </h1>
                <Route exact path = '/'>
                    <PhotoGrid {...this.props}/>
                </Route>
                <Route path = "/view/:postId" >
                    <Single {...this.props} />
                </Route>
            </HashRouter>
        );
    }
}
export default Main;
