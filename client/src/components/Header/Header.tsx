import React from 'react';
import { AppBar, Toolbar, Button, useTheme } from '@mui/material';
import { useRouter } from 'next/navigation';

export const Header: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const theme = useTheme();
    const router = useRouter();

    const handleLogin = () => {
        router.push('/signin');
        setIsLoggedIn(true);
    };

    const handleSignUp = () => {
        router.push('/signup');
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <AppBar position="sticky" sx={{ flexGrow: 1, backgroundColor: theme.palette.primary.dark }}>
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
