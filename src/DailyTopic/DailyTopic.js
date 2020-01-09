import React from 'react'
import './DailyTopic.css'

class DailyTopic extends React.Component {
    render() {
        return(
            <section className={`${this.props.className}`} classname2={`${this.props.className2}`} >
                <p>Who's the GOAT? Lebron or Jordan?</p>
            </section>
        )
    }
}

export default DailyTopic;