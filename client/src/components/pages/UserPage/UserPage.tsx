'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, Typography, Box } from '@mui/material';
import { useTranslations } from 'next-intl';
import { useGetUserData, useGetUserCollections } from './UserPage.utils';
import { ICollection } from 'src/interfaces';

export const UserPage = () => {
    const searchParams = useSearchParams();
    const userId = searchParams.get('userId');
    const t = useTranslations('Index');
    const user = useGetUserData(userId);
    const collections = useGetUserCollections(userId);

    return (
        <Box
            sx={{
                width: '100vw',
                height: '100vh',
            }}
        >
            <h1>{t('userPageTitle')}</h1>
            <Container
                sx={{
                    flexDirection: 'row',
                }}
            >
                {user && (
                    <Box>
                        <Typography variant="subtitle1">{t('userName')} {user.name}</Typography>
                        <Typography variant="subtitle1">{t('userSurname')} {user.surname}</Typography>
                        <Typography variant="subtitle1">{t('userId')} {user.id}</Typography>
                        <Typography variant="subtitle1">{t('userEmail')} {user.email}</Typography>
                        <Typography variant="subtitle1">{t('userRole')} {user.role}</Typography>
                        <Box>
                            User Collections:
                            {collections &&
                                collections.map((collection: ICollection) => (
                                    <Typography key={collection.id} variant="subtitle1">
                                        {collection.title}
                                    </Typography>
                                ))}
                        </Box>
                    </Box>
                )}
            </Container>
        </Box>
    );
};
