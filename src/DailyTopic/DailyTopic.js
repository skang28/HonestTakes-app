import React from 'react'
import './DailyTopic.css'

// displays daily topic, used on multiple paths
class DailyTopic extends React.Component {
    static defaultProps = {
        topics:[]
    }

    render() {
        return(
            <section className={`${this.props.className}`} >
                <p className="topicText">{this.props.topics.length&&this.props.topics[this.props.topics.length-1].topic}</p>
            </section>
        )
    }
}

export default DailyTopic;