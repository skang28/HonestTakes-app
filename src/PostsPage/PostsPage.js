import React, {Component} from 'react'
import AddPost from '../AddPost/AddPost'

class PostsPage extends Component {
    render() {
        return(
            <div className="PostsPage">
                <h1>PostsPage</h1>
                <AddPost /> 
            </div>
        )
    }
}

export default PostsPage;