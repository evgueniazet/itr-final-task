'use client';

import { PropsWithChildren } from 'react';
import { createTheme, ThemeProvider as ThemeProviderBase } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light',
    },
});

export const ThemeProvider = ({ children }: PropsWithChildren) => (
    <ThemeProviderBase theme={theme}>{children}</ThemeProviderBase>
);
