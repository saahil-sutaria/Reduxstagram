import React from 'react';

import {Link} from "react-router-dom";
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import PhotoGrid from "./PhotoGrid";
import './Style.css'
import './facyFontsandMore.css'
import './animations.css'
import Single from "./Single";
import Test2 from "./test2";

class Test1 extends React.Component {
    render() {
        return (
            <div >{React.cloneElement(<Test2></Test2> , this.props)}
                <p>This is t1</p>
            </div>
        );
    }
}
export default Test1;
