import React from 'react'
import './ShowPost.css'
import Comment from './Comment.js'
import NavBar from '../NavBar/NavBar'

class ShowPost extends React.Component {
    // shows individual post content and comments
    // render the entire post and an array of comments
    // another form here for comment creation

    render() {
        let getPost = (post_id) => {
           return this.props.posts.find(post => post_id == post.id)
        }
        
        let post = getPost(this.props.match.params.postId)
        if (!post) post={title: "Loading..."}

        let getComment = (post_id) => {
            return this.props.comments.filter(comment => post_id == comment.post_id)
        }

        let comment = getComment(this.props.match.params.postId)
        
        return(
            <section className="singlePost">
                <NavBar />
                <h1>{post.title}</h1>
                <div className="onlyPost">
                    <p>{post.content}</p>
                    <p>{post.date_posted}</p>
                </div>
                <div className="onlyComment">
                    {comment.map((comment, index) => <Comment content={comment.content} date_posted={comment.date_posted} key={"post" + index}/>)}
                </div>
                <form 
                    onSubmit = {(event) => {
                        event.preventDefault()
                        this.props.addComment({
                            content: event.target.addCommentText.value,
                            date_posted: new Date().toISOString(),
                            post_id: post.id
                        })
                    }}>
                    <textarea name="addCommentText" className="addComment-text" required defaultValue="Go on, type away!"></textarea>
                    <button type="submit" className="addCommentButton">Create Post</button>
                </form>
            </section>
        )
    }
}

export default ShowPost;