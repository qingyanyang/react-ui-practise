import { Outlet } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import React from 'react';

function HomePage() {
  return (
    <div className='bg-formColor-text-filled h-screen'>
      <Navigation />
      <Outlet />
    </div>
  );
}

export default HomePage;
