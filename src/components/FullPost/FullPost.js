import React, { Component } from 'react';
import axios from 'axios'
import './FullPost.css';

class FullPost extends Component {
    state = { post: null }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.id && prevProps.id != this.props.id)
            axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
                .then(response => this.setState({ post: response.data }))
    }

    del_post = async () => {
        let response = await axios.delete('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
        console.log(response);
    }

    render() {
        let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
        if (this.props.id)
            <p style={{ textAlign: "center" }}>Loading...</p>;

        if (this.state.post)
            post = (
                <div className="FullPost">
                    <h1>{this.state.post.title}</h1>
                    <p>{this.state.post.body}</p>
                    <div className="Edit">
                        <button onClick={this.del_post} className="Delete">Delete</button>
                    </div>
                </div>

            );
        return post;
    }
}

export default FullPost;