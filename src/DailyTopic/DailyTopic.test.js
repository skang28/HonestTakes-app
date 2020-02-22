import React from 'react';
import ReactDOM from 'react-dom';
import DailyTopic from './DailyTopic';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DailyTopic />, div);
  ReactDOM.unmountComponentAtNode(div);
});