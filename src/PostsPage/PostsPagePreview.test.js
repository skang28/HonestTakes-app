import React from 'react';
import ReactDOM from 'react-dom';
import PostsPage from './PostsPage';
import PostPreview from './PostPreview';

it('renders PostsPage without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PostsPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders PostPreview without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PostPreview />, div);
    ReactDOM.unmountComponentAtNode(div);
  });