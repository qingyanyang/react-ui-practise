import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import React from 'react';
import TestimonialCard from './components/TestimonialCard';
import BlogCard from './components/BlogCard';
import NotFound from './pages/NotFoundPage';
import ProductDetails from './components/ProductDetail';
import ComponentsCombination from './components/ComponentsCombination';

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
        path: 'components-combination',
        element: <ComponentsCombination />,
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
