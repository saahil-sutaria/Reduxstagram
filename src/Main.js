import React from 'react';

import './Style.css'
import './facyFontsandMore.css'
import './animations.css'
import PhotoGrid from "./PhotoGrid";
import {Link} from "react-router-dom";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Single from "./Single";


class Main extends React.Component {


    render() {

        return (
            <div >

                <h1> <Link to='/'> Reduxstagram</Link> </h1>

                     <Route exact path='/'>
                        <PhotoGrid posts = {this.props.posts} comments={this.props.comments} {...this.props}/>
                    </Route>
                    <Route path = "/view/:postId" >
                        <Single {...this.props} />
                    </Route>

            </div>
        );
    }


}

export default Main;
