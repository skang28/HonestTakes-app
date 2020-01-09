import React from 'react'
import './HomePage.css'

class HomePage extends React.Component {
    render() {
        return(
          <div className="homePage">
            <header className="homePageHeader">
              <h1>Honest Takes</h1>
              <h2>Open, Authentic, Sports Conversation.</h2>
            </header>
            <main className="homePageMain">
              <h3>
                Join the discussion. Honest Takes is a space for anyone to talk about different topics in the sports landscape. Let's chat, let's debate, but most importantly, let's share our love for sports!
              </h3>
              <p>Every day there will be a new topic or question centered around what's buzzing in the sports world. Create your own post or react to other posts with your own comments.   </p>
              <button className="homeButton" onClick = {() => this.props.history.push('/posts')}>Enter Discussion</button>
            </main>
          </div>
        )
    }
}

export default HomePage;