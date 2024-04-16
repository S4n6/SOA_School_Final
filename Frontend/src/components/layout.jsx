import React, { useState } from 'react';
import Header from './navbar';
import { ThemeProvider } from '@emotion/react';
import getLPTheme from '../utils/getLPTheme';
import { createTheme } from '@mui/material';
import Footer from './footer';
import { Box } from '@mui/system';

function Layout({ children, mode, toggleColorMode, showCustomTheme}) {
    const defaultTheme = createTheme({ palette: { mode } });
    const LPtheme = createTheme(getLPTheme(mode));
    return (
        <>
            <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
                <Box
                    sx={{
                        width: '100%',
                        bgcolor: 'background.default',
                        color: 'text.primary',
                        minHeight: '100vh',
                        position: 'relative',
                        transition: 'background-color 0.5s',
                    }}
                >
                    <Header mode={mode} toggleColorMode={toggleColorMode} />
                        {children}
                    <Footer />
                </Box>
            </ThemeProvider>
        </>
    );
}

export default Layout;