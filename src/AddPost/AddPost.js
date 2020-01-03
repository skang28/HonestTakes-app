import React from 'react'

class AddPost extends React.Component {
    render() {
        return(
            <section className="post">
                <p>Post here</p>
                <div className="post_comments">
                    <Comments />
                </div>
            </section>
        )
    }
}

export default AddPost;