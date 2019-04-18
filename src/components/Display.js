import React from 'react';

class Display extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.val}</h1>
                <span></span>
            </div>
        )
    }
}

export default Display;