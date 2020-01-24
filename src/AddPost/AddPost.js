import React from 'react'
import DailyTopic from '../DailyTopic/DailyTopic'
import './AddPost.css'
import NavBar from '../NavBar/NavBar'

class AddPost extends React.Component {
    render() {
        return(
            <section className="addPost">
                <NavBar />
                <DailyTopic className={"addPostTopic"}/>
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
                    <textarea name="addPostTitle" className="addPostTitle-text" required>Title/Summary</textarea>
                    <textarea name="addPostText" className="addPost-text" required>Go on, type away!</textarea>
                    <button type="submit" className="addPostButton">Create Post</button>
                </form>
            </section>
        )
    }
}

export default AddPost;