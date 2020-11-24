import React, { Component } from 'react';

class Gif extends Component {
    
    render() {
        const img = `https://media.giphy.com/media/${this.props.id}/giphy.gif`
        return (
            <img src={img} alt="" className="gif"/>
        )
    }
}

export default Gif;