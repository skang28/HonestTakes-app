import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import './PostPreview.css'
import {format} from 'date-fns'

class PostPreview extends Component {
    render() {
        return(
            <div className="postPreview">
                <NavLink to = {`/posts/show/${this.props.id}`} className="postPreviewLink">{this.props.title}</NavLink>
                <p className="postDate">{format(new Date(this.props.date_posted), 'MMM do, yyyy')}</p>
            </div>
        )
    }
}

export default PostPreview;