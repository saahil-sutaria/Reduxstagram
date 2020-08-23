import React from 'react';
import './Style.css'
import './facyFontsandMore.css'
import './animations.css'
import Photo from "./Photos";


class PostComments extends React.Component {
    constructor() {
        super();

    }

    handleSubmit = (event) =>{
        console.log("inside")
        event.preventDefault();

        const postId = (this.props.code)
        const author =(this.author.value)
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
                <button onClick={()=>this.props.removeComment(this.props.code, i)} className="remove-comment">&times;</button>
            </p>
        </div>)

    }
   /* git remote add origin https://github.com/saahil-sutaria/Reduxstagram.git*/
    render() {

        const {comments, code, index} = this.props

        if (comments[code] === undefined){
            return (
                <div className="comments">
                    <form ref={form => this.form = form } className="comment-form" onSubmit={this.handleSubmit}>
                        <input ref={author => this.author=author} type="text"  placeholder="author"/>
                        <input ref={text => this.text = text } type="text" placeholder="comment"/>
                        <input type="submit" hidden/>
                    </form>
                </div>

            );
        }
        else{
            return (
                <div className= "comments">
                    {comments[code].map((key, i) => this.renderComments(key, i))}
                    <form ref={form => this.form = form } className="comment-form" onSubmit={this.handleSubmit}>
                        <input ref={author => this.author=author} type="text" placeholder="author"/>
                        <input ref={text => this.text = text } type="text" placeholder="comment"/>
                        <input type="submit" hidden/>
                    </form>
                </div>
            );
        }

    }

}


export default PostComments;
