import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  // Fetch posts from API
  loadPosts = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();

      const postList = data.slice(0, 10).map(post => new Post(post.id, post.title, post.body));
      this.setState({ posts: postList });
    } catch (error) {
      console.error("Error fetching posts", error);
      this.setState({ hasError: true });
    }
  };

  // Lifecycle hook – gets called after initial render
  componentDidMount() {
    this.loadPosts();
  }

  // Error boundary – catches rendering errors in children
  componentDidCatch(error, info) {
    alert("An error occurred while rendering the posts.");
    console.error("Caught by componentDidCatch:", error, info);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong!</h2>;
    }

    return (
      <div style={{ padding: '20px' }}>
        <h1>Blog Posts</h1>
        {this.state.posts.map(post => (
          <div key={post.id} style={{ marginBottom: '20px' }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
