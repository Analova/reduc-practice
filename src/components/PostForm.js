import React, { Component } from "react";
import { createPosts } from "../actions/postActions";
import { connect } from "react-redux";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };

    this.props.createPosts(post);
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="title">Title:</label> <br />
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
            />
          </div>
          <br />
          <div>
            <label htmlFor="title">Body:</label> <br />
            <textarea
              name="body"
              value={this.state.body}
              onChange={this.onChange}
            ></textarea>
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}



export default connect(
  null,
  { createPosts }
)(PostForm);
