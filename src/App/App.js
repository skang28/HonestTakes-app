import React, {Component} from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import config from '../config';
import PostsPage from '../PostsPage/PostsPage';
import HomePage from '../HomePage/HomePage';
import AddPost from '../AddPost/AddPost';
import ShowPost from '../ShowPost/ShowPost';

class App extends Component {
  state = {
    posts: [
      {
          id:1,
          title:'test post title 1',
          content:'test post content 1',
          date_posted:'01/01/2020'
      },
      {
          id:2,
          title:'test post title 2',
          content:'test post content 2',
          date_posted:'01/01/2020'
      },
      {
          id:3,
          title:'test post title 3',
          content:'test post content 3',
          date_posted:'01/01/2020'
      }
  ],
    comments: [
      {
          id:1,
          content:'test comment content 1',
          date_posted:'01/01/2020',
          post_id:1,
      },
      {
          id:2,
          content:'test comment content 2',
          date_posted:'01/01/2020',
          post_id:2,
      },
      {
          id:3,
          content:'test comment content 3',
          date_posted:'01/01/2020',
          post_id:2,
      },
      {
        id:4,
        content: 'test comment content 4',
        date_posted: '01/01/2020',
        post_id:3,
      }
  ]
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

  // filter comments by post Id for number of comments to be sent as a prop
  
  addPost = (newPost) => {
    this.state.posts.push(newPost)
  }

  addComment = (newComment) => {
    this.state.comments.push(newComment)
  }

  render() {
    return(
      <div className="app">
        <main className="app-main">
          <Route exact path = '/' component={HomePage} />
          <Route exact path = '/posts' render={(props) => <PostsPage {...props} posts={this.state.posts} />} />
          <Route path = '/create-post' render={(props) => <AddPost {...props} posts={this.state.posts} addPost={this.addPost} />} />
          <Route path = '/posts/:postId' render={(props) => <ShowPost {...props} posts={this.state.posts} comments={this.state.comments} addComment={this.addComment}/>} />
        </main>
      </div>
    )
  }




}

export default App;
