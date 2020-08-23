import React from 'react';
import './Style.css'
import './facyFontsandMore.css'
import './animations.css'
import {Link} from "react-router-dom";

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Photo extends React.Component{

    checking = () =>{

    }

    render() {

        const {post, index, comments} = this.props
        console.log();


        return (

            <figure className= "grid-figure">
                <div className="grid-photo-wrap">
                    <Link onClick={()=>this.props.addPath(index)} to={`/view/${post.code}`}>
                        <img src={`${post.display_src}`} className="grid-photo"/>

                    </Link>
                    <ReactCSSTransitionGroup
                        transitionName = "like"
                        transitionEnterTimeout={2500}
                        transitionLeaveTimeout={2500}>
                            <span key={this.props.post.likes} className="likes-heart">{post.likes}</span>
                    </ReactCSSTransitionGroup>

                </div>
                <figcaption>
                    <p>{this.props.post.caption}</p>
                    <div className="control-buttons">
                        <button onClick={()=> this.props.IncrementLikes(index)} className="likes"> &hearts; {post.likes}</button>
                        <Link className="button" to={`/view/${this.props.post.code}`}>
                            <span className="comment-count">
                                <span className="speech-bubble"></span>
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
