import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import About from './components/About';
// import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
// import  Project from './components/Project';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      // {
        // path: '/Project',
        // element: <Project />,
      // },
      {
        path: '/About',
        element: <About />,
      },
      // {
        // path: '/Portfolio',
      // element: <Portfolio />,
      // },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
