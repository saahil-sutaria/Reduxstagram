import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Link} from "react-router-dom";

import './Styles/Style.css'
import './Styles/facyFontsandMore.css'
import './Styles/animations.css'

/* to render single posts on the photogrid */
class Photo extends React.Component{

    render() {
        const {post, index, comments} = this.props
        return (
            <figure className = "grid-figure">
                <div className ="grid-photo-wrap">
                    <Link onClick = {() => this.props.addPath(index)} to = {`/view/${post.code}`}>
                        <img src = {`${post.display_src}`} alt = {this.props.post.code} className = "grid-photo"/>
                    </Link>
                    <ReactCSSTransitionGroup
                        transitionName = "like"
                        transitionEnterTimeout = {350}
                        transitionLeaveTimeout = {350}>
                            <span key = {this.props.post.likes} className = "likes-heart">{post.likes}</span>
                    </ReactCSSTransitionGroup>
                </div>
                <figcaption>
                    <p>{this.props.post.caption}</p> 
                    <div className = "control-buttons">
                        <button onClick = {()=> this.props.IncrementLikes(index)} 
                                className = "likes"> &hearts; {post.likes}
                        </button>
                        <Link className = "button" to = {`/view/${this.props.post.code}`}>
                            <span className = "comment-count">
                                <span className = "speech-bubble"></span>
                                {comments[post.code] ? comments[post.code].length : 0}
                            </span>
                        </Link>
                    </div>
                </figcaption>
            </figure>
        );
    }
}
export default Photo;
