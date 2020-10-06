import React from 'react';

import './Styles/Style.css'
import './Styles/facyFontsandMore.css'
import './Styles/animations.css'

/* to render comments by post code */
class PostComments extends React.Component {

    handleSubmit = (event) =>{
        event.preventDefault();
        const postId = (this.props.code)
        const author = (this.author.value)
        const comm = (this.text.value)
        this.props.addComment(postId, author, comm)
        this.form.reset()
    }

    renderComments = (key, i) =>{
        return (
            <div className="comment" key ={i}>
            <p>
                <strong>{key.user}</strong>
                {key.text}
                <button onClick = {() => this.props.removeComment(this.props.code , i)} 
                        className="remove-comment">&times;
                </button>
            </p>
        </div>)
    }

    render() {
        const {comments, code} = this.props
        if (comments[code] === undefined){
            return (
                <div className = "comments">
                    <form ref = {form => this.form = form } 
                          className = "comment-form" 
                          onSubmit = {this.handleSubmit}>
                        <div className = "comment-form">
                            <input ref = {author => this.author=author} type = "text"  placeholder = "Author"/>
                            <input ref = {text => this.text = text } type = "text" placeholder = "comment"/>
                            <input type = "submit" hidden/>
                        </div>
                    </form>
                </div>
            );
        }
        else{
            return (
                <div className = "comments">
                    {comments[code].map((key , i) => this.renderComments(key , i))}
                    <form ref = {form => this.form = form } 
                          className = "comment-form" 
                          onSubmit = {this.handleSubmit}>
                        <input ref = {author => this.author = author} type = "text" placeholder = "author"/>
                        <input ref = {text => this.text = text } type = "text" placeholder = "comment"/>
                        <input type = "submit" hidden/>
                    </form>
                </div>
            );
        }
    }
}
export default PostComments;
