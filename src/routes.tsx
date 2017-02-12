import * as React from 'react';
import { Route, IndexRoute } from 'react-router';

import { App } from './components/app';
import { PostsIndex } from './components/posts-index.component';
import { PostsNew } from './components/posts-new.component';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={ PostsIndex } />
        <Route path="posts" component={ PostsNew }/>
    </Route>
);