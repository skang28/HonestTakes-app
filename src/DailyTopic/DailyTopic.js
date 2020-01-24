import React from 'react'
import './DailyTopic.css'

class DailyTopic extends React.Component {
    static defaultProps = {
        topics:[]
    }

    render() {
        console.log(this.props.topics)
        return(
            <section className={`${this.props.className}`} classname2={`${this.props.className2}`} >
                <p>{this.props.topics.length&&this.props.topics[this.props.topics.length-1].topic}</p>
            </section>
        )
    }
}

export default DailyTopic;