import { Avatar, Flex } from '@radix-ui/themes';
import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  name: string;
  path: string;
}

const NavLink: React.FC<NavLinkProps> = ({ name, path }) => {
  return (
    <Link to={path}>
      <p className=''>{name}</p>
    </Link>
  );
};

const links = [
  { id: 1, name: 'testimonial card', path: '/' },
  { id: 2, name: 'blog card', path: '/blog-card' },
  { id: 3, name: 'blog card', path: '/blog-card' },
  { id: 4, name: 'blog card', path: '/blog-card' },
];

function Navigation() {
  return (
    <header>
      <nav className='flex justify-between items-center h-20'>
        <Flex align='center' gap='4'>
          {links.map((link) => (
            <NavLink key={link.id} name={link.name} path={link.path} />
          ))}
        </Flex>
        <Avatar
          size='3'
          src='https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop'
          radius='full'
          fallback='A'
        />
      </nav>
    </header>
  );
}

export default Navigation;
