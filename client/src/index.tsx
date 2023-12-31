import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './routes/App';
import reportWebVitals from './reportWebVitals';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Post } from './components/index';
import { RootLayout } from './routes/RootLayout';
import PostDetails from './routes/PostDetails';
import { loader as postsLoader } from './routes/App';
import { action as postAction } from '../src/components/form/Post';
import { loader as postDetailsLoader } from './routes/PostDetails';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <App />, // as long as loader executes, component will not be rendered
        loader: postsLoader, // to load & prepare data that might be needed by this route component or other component used as part of that route
        children: [
          { path: '/create-post', element: <Post />, action: postAction },
          {
            path: '/:postId',
            element: <PostDetails />,
            loader: postDetailsLoader,
          },
        ],
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
