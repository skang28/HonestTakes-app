import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import './PostPreview.css'
import {format} from 'date-fns'

// displays individual posts on Posts page 
class PostPreview extends Component {
    static defaultProps = {
        date_posted: '2020-02-25T01:08:49.675Z'
    }
    
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