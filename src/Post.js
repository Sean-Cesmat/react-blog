import React, { Component } from 'react';
import logo from './logo.svg';
import Comment from './Comment';
import Author from './Author';
import './Post.css';

class Post extends Component {
  render() {
    const {title, allAuthors, body, comments} = this.props
    {/*let allComments = [
      <Comment text = {comments[0]} />,
      <Comment text = {comments[1]} />,
      <Comment text = {comments[2]} />
    ]*/}

    let allComments = comments.map(function(comment, index) {
      return <Comment key = {index} text = {comment} id = {index} />
    })

    let allAuthorsList = allAuthors.map(function(author, index) {
      return <Author key={index} name={author} id={index} />
    })

    return (
      <div className="Post">
        <header className="Post-header">
          <h1 className="Post-title">{title}</h1>
        </header>
        <p className="Post-intro">
          {body}
        </p>
        <h4>Written By</h4>
        {allAuthorsList}
        <h4>Comments</h4>
        {allComments}
      </div>
    );
  }
}

export default Post;
