import * as React from 'react';
import * as ReactRedux from 'react-redux';


class IndexPosts extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
    }

    render() {
        return (
          <div> Posts page!</div>  
        );
    }
}

function mapStatetoProps() {

}

export { IndexPosts }