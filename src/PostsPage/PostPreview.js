import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import './PostPreview.css'

class PostPreview extends Component {
    // show topic of discussion and all posts underneath (title, date_posted, # of comments)
    // separate component to map the post previews
    // button/link which takes user to AddPost (form)
    // clicking each post preview takes you to individual posts' page ()
    render() {
        return(
            <div className="postPreview">
                <NavLink to = {`/posts/${this.props.id}`} className="postPreviewLink">{this.props.title}</NavLink>
                <p>{this.props.date_posted}</p>
            </div>
        )
    }
}

export default PostPreview;