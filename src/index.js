import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Root from './routes/Root.js';
import Blog, { loader as blogLoader } from './routes/Blog.js';
import Home from './routes/Home.js';
import Work from './routes/Work.js';
import Projects from './routes/Projects.js';
import CourseNotes from './routes/CourseNotes.js';
import Games from './routes/Games.js';
import { 
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
    >
      <Route index element={<Home />} />
      <Route
        path="work"
        element={<Work />}
      />
      <Route 
        path="projects"
        element={<Projects />}
      />
      <Route 
        path="blog"
        loader={ blogLoader }
        element={<Blog />}
      />
      <Route 
        path="course_notes"
        element={<CourseNotes />}
      />
      <Route 
        path="games"
        element={<Games />}
      />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
