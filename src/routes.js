import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './client/App';
import PostsIndex from 'client/components/PostsIndex';
import PostsNew from 'client/components/PostsNew';
import PostsShow from 'client/components/PostsShow';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex} />
    <Route path="posts/new" component={PostsNew} />
    <Route path="posts/:id" component={PostsShow} />
  </Route>
);


