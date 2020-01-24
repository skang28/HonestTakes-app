import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import './PostPreview.css'

class PostPreview extends Component {
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