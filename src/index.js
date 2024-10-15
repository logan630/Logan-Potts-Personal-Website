import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Root from './routes/Root.jsx';
import Blog, { loader as blogLoader } from './routes/Blog.jsx';
import Home from './routes/Home.jsx';
import Work from './routes/Work.jsx';
import Projects from './routes/Projects.jsx';
import CourseNotes from './routes/CourseNotes.jsx';
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
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
