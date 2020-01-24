import React, {Component} from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import config from '../config';
import PostsPage from '../PostsPage/PostsPage';
import HomePage from '../HomePage/HomePage';
import AddPost from '../AddPost/AddPost';
import ShowPost from '../ShowPost/ShowPost';
import DailyTopic from '../DailyTopic/DailyTopic';

class App extends Component {
  state = {
    posts: [],
    comments: [],
    topics: []
  };

  componentDidMount() {
    Promise.all([
        fetch(`${config.API_ENDPOINT}/api/posts`),
        fetch(`${config.API_ENDPOINT}/api/comments`),
        fetch(`${config.API_ENDPOINT}/api/topics`)
    ])
    .then(([postsRes, commentsRes, topicsRes]) => {
        if(!postsRes.ok)
            return postsRes.json().then(e => Promise.reject(e));
        if(!commentsRes.ok)
            return commentsRes.json().then(e => Promise.reject(e));
        if(!topicsRes.ok)
          return topicsRes.json().then(e => Promise.reject(e));
        return Promise.all([postsRes.json(), commentsRes.json(), topicsRes.json()]);
    })
    .then(([posts, comments, topics]) => {
        this.setState({posts:posts.filter( (post) => {
          return post.date_posted > topics[topics.length-1].date_posted
        }), comments, topics});
        console.log(posts)
        console.log(comments)
        console.log(topics)
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
  
  /*addPost = (newPost) => {
    this.state.posts.push(newPost)
  }

  addComment = (newComment) => {
    this.state.comments.push(newComment)
  }*/

  render() {
    return(
      <div className="app">
        <main className="app-main">
          <Route path = '/posts' render={(props) => <DailyTopic {...props} topics={this.state.topics} />} />
          <Route exact path = '/' component={HomePage} />
          <Route exact path = '/posts' render={(props) => <PostsPage {...props} posts={this.state.posts} />} />
          <Route path = '/posts/create-post' render={(props) => <AddPost {...props} posts={this.state.posts} addPost={this.addPost} />} />
          <Route path = '/posts/:postId' render={(props) => <ShowPost {...props} posts={this.state.posts} comments={this.state.comments} addComment={this.addComment}/>} />
        </main>
      </div>
    )
  }




}

export default App;
