import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { FaLink, FaChartBar, FaRocket } from 'react-icons/fa';

const Header = () => {
  return (
    <AppBar position="static" sx={{ mb: 4, background: '#6200ea' }}>
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', fontWeight: 'bold' }}
        >
          <FaRocket style={{ marginRight: '8px' }} />
          LinkMint
        </Typography>
        <Button color="inherit" startIcon={<FaLink />} component={Link} to="/">
          Shorten
        </Button>
        <Button color="inherit" startIcon={<FaChartBar />} component={Link} to="/stats">
          Stats
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
