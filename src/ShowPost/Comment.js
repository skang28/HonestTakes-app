import React from 'react'

class Comment extends React.Component {
    // component is for showing the comment on the individual post page (date_posted, content, etc.)
    render() {
        return(
            <section className="comment">
                <p>{this.props.content}</p>
                <p>{this.props.date_posted}</p>
            </section>
        )
    }
}

export default Comment;