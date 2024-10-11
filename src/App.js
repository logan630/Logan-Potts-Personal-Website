import './App.css';
import Nav from './components/Nav.js';
import BlogPost from './components/BlogPost.js';
import { useState, useEffect } from 'react';

function App() {
  // posts is an array of javascript objects, each containing a timestamp and source
  const [posts, setPosts] = useState([]);

  // retrieve the list of current posts from posts.js
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
