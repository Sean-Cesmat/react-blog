import React, { Component } from 'react';

class Comment extends Component {

  render() {
    return (
      <div>
        <p>{this.props.id + 1}. {this.props.text}</p>
      </div>
    )
  }
}

export default Comment;
