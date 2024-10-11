import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Root from './routes/Root.js';
import Blog from './routes/Blog.js';
import Home from './routes/Home.js';
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
        path="blog"
        element={<Blog />}
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
