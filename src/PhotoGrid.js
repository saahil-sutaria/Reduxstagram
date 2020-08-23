import React from 'react';
import './Style.css'
import './facyFontsandMore.css'
import './animations.css'
import Photo from "./Photos";

class PhotoGrid extends React.Component {

    constructor(props) {
        super(props);

    }


    render() {

        return (
            <div className= "photo-grid">
                {this.props.posts.map((key,i)=>{ return <Photo post={key} key={i} index={i} comments = {this.props.comments} {...this.props}/> })}

            </div>
        );
    }

}


export default PhotoGrid;
