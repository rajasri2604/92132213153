import React from 'react';
import { Box, Typography, Link as MuiLink } from '@mui/material';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#6200ea',
        color: '#fff',
        py: 3,
        mt: 5,
        textAlign: 'center',
      }}
    >
      <Typography variant="body1" fontWeight="bold">
        © {new Date().getFullYear()} LinkMint — All Rights Reserved
      </Typography>

      <Box sx={{ mt: 1 }}>
        <MuiLink
          href="https://github.com/yourusername"
          color="inherit"
          target="_blank"
          rel="noopener"
          sx={{ mx: 1 }}
        >
          <FaGithub size={20} />
        </MuiLink>
        <MuiLink
          href="https://linkedin.com/in/yourprofile"
          color="inherit"
          target="_blank"
          rel="noopener"
          sx={{ mx: 1 }}
        >
          <FaLinkedin size={20} />
        </MuiLink>
      </Box>
    </Box>
  );
};

export default Footer;
