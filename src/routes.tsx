import * as React from 'react';
import { Route, IndexRoute } from 'react-router';

import { App } from './components/app';
import { IndexPosts } from './components/posts-index.component';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={IndexPosts} />
    </Route>
);