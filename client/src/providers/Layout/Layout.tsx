'use client';

import { PropsWithChildren } from 'react';
import { Container, useTheme } from '@mui/material';
import { Header } from 'components/Header';

export const Layout = ({ children }: PropsWithChildren) => {
    const theme = useTheme();

    return (
        <Container
            maxWidth={false}
            sx={{
                height: '100vh',
                width: '100vw',
                backgroundColor: theme.palette.background.default,
                p: '0!important',
            }}
        >
            <Header />
            <Container maxWidth="xl">{children}</Container>
        </Container>
    );
};
