import React from 'react';
import {
    AppBar,
    Toolbar,
    Button,
    useTheme,
    Select,
    MenuItem,
    SelectChangeEvent,
} from '@mui/material';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { ELanguages } from 'enums/ELanguages';

export const Header: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const theme = useTheme();
    const router = useRouter();
    const pathname = usePathname();
    const query = useSearchParams();

    const match = pathname.match(/^\/(en|ru)(\/|$)/);
    const language = match ? match[1] : '';

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

    const handleChangeLanguage = (event: SelectChangeEvent<string>) => {
        const selectedLanguage = event.target.value as ELanguages;
        const newURL = `${pathname.replace(/^\/(en|ru)/, `/${selectedLanguage}`)}?${query}`;

        router.push(newURL);
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
                <Select
                    value={language}
                    onChange={handleChangeLanguage}
                    variant="outlined"
                    sx={{ ml: 2 }}
                >
                    <MenuItem value={ELanguages.ENGLISH}>English</MenuItem>
                    <MenuItem value={ELanguages.RUSSIAN}>Русский</MenuItem>
                </Select>
            </Toolbar>
        </AppBar>
    );
};
