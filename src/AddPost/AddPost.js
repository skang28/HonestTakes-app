import React from 'react'
import './AddPost.css'

// Component for form to create new post
class AddPost extends React.Component {
    render() {
        return(
            <section className="addPost">
                <form className="addPostForm"
                    onSubmit = {(event) => {
                        event.preventDefault()
                        this.props.addPost({
                            title: event.target.addPostTitle.value,
                            content: event.target.addPostText.value,
                            date_posted: new Date().toISOString()
                        })
                        this.props.history.push('/posts')
                    }}> 
                    <textarea name="addPostTitle" className="addPostTitle-text" placeholder="Title/Summary" required></textarea>
                    <textarea name="addPostText" className="addPost-text" placeholder="Go on, type away!" required></textarea>
                    <button type="submit" className="addPostButton">Create Post</button>
                </form>
            </section>
        )
    }
}

export default AddPost;