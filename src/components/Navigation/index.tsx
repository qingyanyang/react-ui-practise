import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import { Avatar } from '@radix-ui/themes';
import { Link } from 'react-router-dom';

const links = [
  { id: '1', name: 'testimonial card', path: '/' },
  { id: '2', name: 'blog card', path: '/blog-card' },
  { id: '3', name: 'blog card', path: '/blog-card' },
  { id: '4', name: 'blog card', path: '/blog-card' },
  { id: '5', name: 'blog card', path: '/blog-card' },
  { id: '6', name: 'blog card', path: '/blog-card' },
];

interface NavLinkProps {
  name: string;
  path: string;
}

const NavLink: React.FC<NavLinkProps> = ({ name, path }) => {
  return (
    <Link to={path}>
      <p className='font-bold'>{name}</p>
    </Link>
  );
};

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );
  const [alignment, setAlignment] = React.useState('1');

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    console.log(event);
    setAlignment(newAlignment);
  };
  return (
    <AppBar position='static'>
      <Container maxWidth='xl' className='bg-formColor-text-filled'>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {links.map((link) => (
                <MenuItem key={link.id}>
                  <NavLink name={link.name} path={link.path} />
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <ToggleButtonGroup
              color='primary'
              value={alignment}
              exclusive
              onChange={handleChange}
              aria-label='Platform'
            >
              {links.map((link) => (
                <ToggleButton
                  value={link.id}
                  key={link.id}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <NavLink name={link.name} path={link.path} aria-label='id' />
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Avatar
              size='3'
              src='https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop'
              radius='full'
              fallback='A'
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
