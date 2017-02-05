import * as React from 'react'

class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export { App };
