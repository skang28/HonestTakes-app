import React from 'react'

class HomePage extends React.Component {
    render() {
        return(
          <div className="App">
            <header className="App_header">
              <h1>Honest Takes</h1>
              <h2>Open, Authentic, Sports Conversation.</h2>
            </header>
            <main className="App_main">
              <h3>
                Join the discussion. Honest Takes is a space for anyone to talk about different topics in the sports landscape. Let's chat, let's debate, but most importantly, let's share our love for sports!
              </h3>
              <button className="App_button" onClick = {() => this.props.history.push('/posts')}>Enter Discussion</button>
            </main>
          </div>
        )
    }
}

export default HomePage;