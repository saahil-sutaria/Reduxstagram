import React from 'react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PostComments from "./PostComments";

/* to render particular post by post code */
class Single extends React.Component {
    renderPhoto = (posts, path, comments) => {
        let post = posts[parseInt(path)]
        return <figure>
            <img src = {post.display_src} alt = {this.props.posts.code} className = "grid-photo"/>    
            <figcaption>
                <p>{post.caption}</p>
                <div className = "control-buttons">
                    <button onClick = {()=> this.props.IncrementLikes(path)} 
                            className = "likes"> &hearts; {post.likes}
                    </button>
                    <span className = "comment-count">
                        <span className = "speech-bubble"></span>
                        {comments[post.code] ? comments[post.code].length : 0}
                    </span>
                </div>
            </figcaption>
        </figure>
}

    render() {
        const {posts, path, comments} = this.props
        return (
            <div className = "single-photo">
                {this.renderPhoto(posts, path, comments)}
                <p>  &nbsp; </p>
                <p>  &nbsp; </p>
                <PostComments comments = {comments} 
                              code = {posts[parseInt(path)].code} 
                              {...this.props}/>
            </div>
        );
    }
}
export default Single;
