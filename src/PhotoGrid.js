import React from 'react';

import Photo from "./Photos";
import './Styles/Style.css'
import './Styles/facyFontsandMore.css'
import './Styles/animations.css'

/* responsible to render posts via map */
class PhotoGrid extends React.Component {

    render() {
        return (
            <div className = "photo-grid">
                {this.props.posts.map((key , i) => { 
                    return <Photo post = {key}
                                  key = {i} 
                                  index = {i} 
                                  comments = {this.props.comments} 
                                  {...this.props}/> 
                })}
            </div>
        );
    }
}
export default PhotoGrid;
