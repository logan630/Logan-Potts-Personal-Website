import BlogPost from '../components/BlogPost.js';
import { useLoaderData } from 'react-router-dom';
import "../css/Blog.css";

const loader = async () => {
    const response = await fetch('posts.json');
    const text = await response.text();
    const posts = JSON.parse(text).reverse();

    return { posts };
}

const Blog = () => {
    const { posts } = useLoaderData();

    return (
        <div className="blog-container">
            {posts.map(({ timestamp, source }) => (
                <BlogPost timestamp={timestamp} source={source} />
            ))}
        </div>
    );
}

export default Blog;
export { loader };