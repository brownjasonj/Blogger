import * as React from 'react';
import * as ReactRedux from 'react-redux';

import { fetchPosts } from '../actions/index';


class PostsIndex extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
    }

    componentWillMount() {
        fetchPosts();
    }

    render() {
        return (
          <div> Posts page!</div>  
        );
    }
}

ReactRedux.connect(null, { fetchPosts })(PostsIndex);

export { PostsIndex }
