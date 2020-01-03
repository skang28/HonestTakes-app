import React, {Component} from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
import config from '../config';
import PostsPage from '../PostsPage/PostsPage';
import HomePage from '../HomePage/HomePage';

class App extends Component {
  state = {
    posts: [],
    comments: []
  };

  componentDidMount() {
    Promise.all([
        fetch(`${config.API_ENDPOINT}/api/posts`),
        fetch(`${config.API_ENDPOINT}/api/comments`)
    ])
    .then(([postsRes, commentsRes]) => {
        if(!postsRes.ok)
            return postsRes.json().then(e => Promise.reject(e));
        if(!commentsRes.ok)
            return commentsRes.json().then(e => Promise.reject(e));
        return Promise.all([postsRes.json(), commentsRes.json()]);
    })
    .then(([posts, comments]) => {
        this.setState({posts, comments});
        console.log(posts)
        console.log(comments)
    })
    .catch(error => {
        console.error({error});
    })
  }

  addPost = (newPost) => {
    let newPosts = this.state.posts
    fetch(`${config.API_ENDPOINT}/api/posts`, {
      method: 'POST',
      body: JSON.stringify(newPost),
      headers:{
        'Content-type': 'application/json'
      }
    })
    .then(res => {
      if(!res.ok) {
        throw new Error(res.status)
      }
      return res.json()
    })
    .then( (newPostResponse) => {
      newPosts.push(newPostResponse)
      this.setState({posts: newPosts})
    })
    .catch((error) => console.log(error))
  }

  addComment = (newComment) => {
    let newComments = this.state.comments
    fetch(`${config.API_ENDPOINT}/api/comments`, {
      method: 'POST',
      body: JSON.stringify(newComment),
      headers:{
        'Content-type': 'application/json'
      }
    })
    .then(res => {
      if(!res.ok) {
        throw new Error(res.status)
      }
      return res.json()
    })
    .then( (newCommentResponse) => {
      newComments.push(newCommentResponse)
      this.setState({comments: newComments})
    })
    .catch((error) => console.log(error))
  }

  
  
  render() {
    return(
      <div className="App">
        <nav className="App_nav">NAVBAR</nav>
        <main className="App_main">
          <Route exact path = '/' component={HomePage} />
          <Route path = '/posts' component={PostsPage} />
        </main>
      </div>
    )
  }




}

export default App;
