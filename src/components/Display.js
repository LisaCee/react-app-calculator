import React from 'react';
import '../css/Display.css';

class Display extends React.Component {
    render() {
        return (
            <div className="display">
                <span>{this.props.val}</span>
            </div>
        )
    }
}

export default Display;