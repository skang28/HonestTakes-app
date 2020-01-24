import React, {Component} from 'react'
import PostPreview from './PostPreview'
import NavBar from '../NavBar/NavBar'
import './PostsPage.css'
import DailyTopic from '../DailyTopic/DailyTopic'

class PostsPage extends Component {
    // show topic of discussion and all posts underneath (title, date_posted, # of comments)
    // separate component to map the post previews
    // button/link which takes user to AddPost (form)
    // clicking each post preview takes you to individual posts' page ()
    render() {
        return(
            <div className="postsPage">
                <NavBar />
                <h1>Posts Page</h1>
                <div className="posts-container">
                    {this.props.posts.length?
                        this.props.posts.map((item, index) => <PostPreview id = {item.id} title={item.title} date_posted={item.date_posted} key={"post" + index}/>)
                        :'There are no posts yet'} 
                </div>
                <button 
                    className="postsPageButton" 
                    onClick = {() => this.props.history.push('/posts/create-post')}
                >Add Post</button>
            </div>
        )
    }
}

export default PostsPage;