import React from 'react';
import ReactDOM from 'react-dom';
import ShowPost from './ShowPost';
import Comment from './Comment';

it('renders ShowPost without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ShowPost />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Comment without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Comment />, div);
    ReactDOM.unmountComponentAtNode(div);
  });