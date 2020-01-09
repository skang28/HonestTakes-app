import React from 'react'
import DailyTopic from '../DailyTopic/DailyTopic'
import './AddPost.css'
import NavBar from '../NavBar/NavBar'

class AddPost extends React.Component {
    // form for post creation
    // on submit it should go back to PostsPage updated with just created post
    render() {
        return(
            <section className="addPost">
                <NavBar />
                <DailyTopic className={"addPostTopic"}/>
                <form className="addPostForm"
                    onSubmit = {(event) => {
                        event.preventDefault()
                        this.props.addPost({
                            id: 5,
                            title: event.target.addPostTitle.value,
                            content: event.target.addPostText.value,
                            date_posted: '01/01/2020'
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