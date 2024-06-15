import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/'>testimonial card</Link>
          </li>
          <li>
            <Link to='/blog-card'>blog card</Link>
          </li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
