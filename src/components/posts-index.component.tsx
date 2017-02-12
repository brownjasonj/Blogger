import * as React from 'react';
import * as ReactRedux from 'react-redux';
import { Link } from 'react-router';

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
            <div>
                <div className="text-xs-right">
                    <Link to="/posts" className="btn btn-primary">
                        Add a Post
                    </Link>
                </div>
            Posts page!
            </div>  
        );
    }
}

ReactRedux.connect(null, { fetchPosts })(PostsIndex);

export { PostsIndex }
