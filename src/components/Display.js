import React from 'react';

class Display extends React.Component {
    render() {
        return (
            <div>
                <span>{this.props.val}</span>
            </div>
        )
    }
}

export default Display;