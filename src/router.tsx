import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import React from 'react';
import TestimonialCard from './components/TestimonialCard';
import BlogCard from './components/BlogCard';
import NotFound from './pages/NotFoundPage';
import ProductDetails from './components/ProductDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    children: [
      {
        index: true,
        element: <TestimonialCard />,
      },
      {
        path: 'blog-card',
        element: <BlogCard />,
      },
      {
        path: 'product-details',
        element: <ProductDetails />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
