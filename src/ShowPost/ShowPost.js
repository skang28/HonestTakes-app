import React from 'react'
import './ShowPost.css'
import Comment from './Comment.js'
import {format} from 'date-fns'

// displays individual post with its content and has form handler for adding comments
class ShowPost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {message: null}
    }
    render() {
        let getPost = (post_id) => {
           return this.props.posts.find(post => post_id == post.id)
        }
        
        let post = getPost(this.props.match.params.postId)
        if (!post) post={title: "Loading..."}
        let date = post.date_posted || new Date().toISOString()

        let getComment = (post_id) => {
            return this.props.comments.filter(comment => post_id == comment.post_id)
        }

        let comment = getComment(this.props.match.params.postId)
        
        return(
            <section className="singlePost">
                <div className="onlyPost">
                    <h1 className="postTitle">{post.title}</h1>
                    <p>{post.content}</p>
                    <p className="postDate">{format(new Date(date), 'MMM do, yyyy')}</p>
                </div>
                <p className="commentTitle">Comments...</p>
                <div className="onlyComment">
                    {this.props.comments.length?
                        comment.map((comment, index) => <Comment content={comment.content} date_posted={format(new Date(comment.date_posted), 'MMM do, yyyy')} key={"post" + index}/>)
                        :'There are no comments yet'}
                </div>
                {this.state.message ? <p className="addCommentError">{this.state.message}</p>:''}
                <form 
                    onSubmit = {(event) => {
                        event.preventDefault()
                        this.props.addComment({
                            content: event.target.addCommentText.value,
                            date_posted: new Date().toISOString(),
                            post_id: post.id
                        }, (error) => {
                            if(error) {
                                this.setState({
                                    message: error.error.message
                                })
                            }
                        })
                    }}>
                    <textarea name="addCommentText" className="addComment-text" required placeholder="Respond!"></textarea>
                    <button type="submit" className="addCommentButton">Add Comment</button>
                </form>
            </section>
        )
    }
}

export default ShowPost;