
import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css'
import Layout from './components/layout/Layout';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/home/Home';
import Shop from './pages/Shop';
import Basket from './pages/basket/Basket';
import NotFoundPage from './pages/NotFoundPage';
import AdminPanel from './pages/admin/AdminPanel';
import ProductDetail from './pages/productDetail/ProductDetail';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/blog", element: <Blog /> },
        { path: "/contact", element: <Contact /> },
        { path: "/shop", element: <Shop /> },
        { path: "/basket", element: <Basket /> },
        { path: "/about", element: <About /> },
        { path: "/productdetail/:id", element: <ProductDetail /> },
        { path: "/admin", element: <AdminPanel /> },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
