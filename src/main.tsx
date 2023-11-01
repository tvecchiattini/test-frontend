import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './pages/root/root.page.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/errors/404/404.page.tsx';
import Brands from './pages/brands/brands.page.tsx';
import { brandsLoader } from './pages/brands/loader.ts';
import { productsLoader } from './pages/products/loader.ts';
import Products from './pages/products/products.page.tsx';
import { usersLoader } from './pages/users/loader.ts';
import Users from './pages/users/users.page.tsx';
import { userLoader } from './pages/user/loader.ts';
import UserPage from './pages/user/user.page.tsx';
import UserCreatePage from './pages/user/user.create.page.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/users",
    loader: usersLoader,
    element: <Users />,
  },
  {
    path: "/users/create",
    element: <UserCreatePage />,
  },
  {
    path: "/users/:id",
    loader: userLoader,
    element: <UserPage />,
  },
  {
    path: "/brands",
    loader: brandsLoader,
    element: <Brands />,
  },
  {
    path: "/brands/:code",
    loader: productsLoader,
    element: <Products />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
