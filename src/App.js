import './App.css';
import Nav from './Nav.js';
import BlogPost from './BlogPost.js';

function App() {
  return (
    <div className="App">
      <Nav name="Logan Potts" />
      <BlogPost timestamp="October 10, 2024" source="test.md" />
    </div>
  );
}

export default App;
