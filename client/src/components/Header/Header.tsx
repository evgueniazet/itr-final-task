import React from 'react';
import { AppBar, Toolbar, Button, useTheme } from '@mui/material';

export const Header: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const theme = useTheme();

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleSignUp = () => {};

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <AppBar position="static" sx={{ flexGrow: 1, backgroundColor: theme.palette.primary.dark }}>
            <Toolbar>
                {isLoggedIn ? (
                    <Button color="inherit" onClick={handleLogout}>
                        Logout
                    </Button>
                ) : (
                    <>
                        <Button color="inherit" onClick={handleLogin}>
                            Login
                        </Button>
                        <Button color="inherit" onClick={handleSignUp} sx={{ marginLeft: 'auto' }}>
                            Sign Up
                        </Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};
