import React from 'react';
import { createBrowserRouter } from 'react-router-dom'; 
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./components/NotFound";
import UserList from './pages/UserList';
import UserProfile from './pages/UserProfile';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "users",
        element: <UserList/>,
      },
      {
        path: "users/:userid",
        element: <UserProfile/>,
      },
    ],
  },
]);

export default Router;