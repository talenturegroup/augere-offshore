import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About';
import Service from './pages/Service'
import Hse from './pages/Hse'
import Sustainability from './pages/Sustainability'
import Contact from './pages/Contact'
import Insights from './pages/Insights';
import Blog from './pages/Blog';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([{
  path: '/',
  element: <App/>,
},
{
  path: '/about',
  element: <About/>,
},
{
  path: '/service',
  element: <Service/>,
},
{
  path: '/hse',
  element: <Hse/>,
},
{
  path: '/sustainability',
  element: <Sustainability/>,
},{
  path: '/contact',
  element: <Contact/>,
},{
  path: '/insights',
  element: <Insights/>
},
{
  path: '/insights/:blogID',
  element: <Blog/>,
}
])

root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
