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
import { getLanguageFromUrl } from 'utils/getLanguageFromUrl';

export const Header: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const theme = useTheme();
    const router = useRouter();
    const pathname = usePathname();
    const query = useSearchParams();

    const language = getLanguageFromUrl(pathname);

    const handleLogin = () => {
        router.push(`/${language}/signin`);
        setIsLoggedIn(true);
    };

    const handleSignUp = () => {
        router.push(`/${language}/signup`);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    const handleChangeLanguage = (event: SelectChangeEvent<string>) => {
        const selectedLanguage = event.target.value as ELanguages;
        const newURL = `${pathname.replace(/^\/(en|ru)/, `/${selectedLanguage}`)}?${query}`;

        router.push(newURL);
    };

    const handleUsers = () => {
        router.push(`/${language}/users     `);
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
                <Button color="inherit" onClick={handleUsers}>
                    Users
                </Button>
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
