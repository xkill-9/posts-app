import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './client/App';
import PostsIndex from 'client/components/PostsIndex';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex} />
  </Route>
);


