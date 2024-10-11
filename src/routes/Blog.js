import BlogPost from '../components/BlogPost.js';
import { useState, useEffect } from 'react';
import "../css/Blog.css"

const Blog = () => {
    // posts is an array of javascript objects, each containing a timestamp and source
    const [posts, setPosts] = useState([]);

  // retrieve the list of current posts from posts.js
    useEffect(() => {
        fetch('posts.json')
            .then((res) => res.text())
            .then((text) => setPosts(JSON.parse(text).reverse()));
    }, []);

    return (
        <div className="blog-container">
            {posts.map(({ timestamp, source }) => (
                <BlogPost timestamp={timestamp} source={source} />
            ))}
        </div>
    );
}

export default Blog;