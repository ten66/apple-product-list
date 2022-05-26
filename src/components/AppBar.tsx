import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles';

const ButtonAppBar = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          style={{
            background: "black",
            opacity: 0.8,
          }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{
                mr: 2,
                "&: hover": {
                  background: theme.palette.secondary.dark,
                }
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Apple Product List
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

export default ButtonAppBar;
