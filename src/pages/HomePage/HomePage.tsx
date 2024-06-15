import { Outlet } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import React from 'react';

function HomePage() {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
}

export default HomePage;
