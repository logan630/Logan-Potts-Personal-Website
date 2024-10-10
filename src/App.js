import './App.css';
import Nav from './Nav.js';
import BlogPost from './BlogPost.js';
import { useState, useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('posts.json')
      .then((res) => res.text())
      .then((text) => setPosts(JSON.parse(text).reverse()));
  }, []);

  return (
    <div className="App">
      <Nav name="Logan Potts" />
      <div className="blog-container">
      {posts.map(({ timestamp, source }) => (
        <BlogPost timestamp={timestamp} source={source} />
      ))}
      </div>
    </div>
  );
}

export default App;
