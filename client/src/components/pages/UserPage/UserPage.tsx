'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Container, Typography, Box, Button, IconButton } from '@mui/material';
import { Delete, Edit, Add } from '@mui/icons-material';
import { useUser } from './UserPage.utils';
import { ModalWindowCollection } from '../../ModalWindowCollection';
import { TCollection } from 'types/TCollection';
import { Image } from 'components/Image';

export const UserPage = () => {
    const searchParams = useSearchParams();
    const userId = searchParams.get('userId');
    const t = useTranslations('UserPage');
    const { useGetUserData, useGetUserCollections, deleteCollection } = useUser();
    const user = useGetUserData(userId);
    const collections = useGetUserCollections(userId);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleEditCollection = (collectionId: number) => {};

    const handleDeleteCollection = (collectionId: number) => {
        deleteCollection(collectionId);
    };

    const handleCreateCollection = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <Box
            sx={{
                height: '100vh',
                mt: 4,
            }}
        >
            <Typography
                sx={{ display: 'flex', justifyContent: 'center' }}
                variant="h3"
                component="h3"
            >
                {t('title')}
            </Typography>

            <Container
                sx={{
                    flexDirection: 'row',
                }}
            >
                {user && (
                    <Box>
                        <Typography
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                mt: 3,
                                textDecoration: 'underline',
                            }}
                            variant="h5"
                            component="h5"
                        >
                            {t('userInfoTitle')}
                        </Typography>
                        <Container sx={{ mt: 3 }}>
                            <Typography variant="subtitle1">
                                {t('name')} {user.name}
                            </Typography>
                            <Typography variant="subtitle1">
                                {t('surname')} {user.surname}
                            </Typography>
                            <Typography variant="subtitle1">
                                {t('id')} {user.id}
                            </Typography>
                            <Typography variant="subtitle1">
                                {t('email')} {user.email}
                            </Typography>
                            <Typography variant="subtitle1">
                                {t('role')} {user.role}
                            </Typography>
                        </Container>

                        <Box sx={{ mt: 3 }}>
                            <Typography
                                variant="h5"
                                component="h5"
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    mt: 3,
                                    textDecoration: 'underline',
                                }}
                            >
                                {t('collectionsTitle')}
                            </Typography>
                            <Container>
                                {collections &&
                                    collections.map((collection: TCollection) => (
                                        <Box
                                            key={collection.id}
                                            sx={{
                                                mt: 3,
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                            }}
                                        >
                                            <Container>
                                                <Typography variant="subtitle1">
                                                    Collection name:{collection.title}
                                                </Typography>
                                                <Typography variant="subtitle1">
                                                    Collection description:{collection.description}
                                                </Typography>
                                            </Container>

                                            <Image imageUrl={collection.image}></Image>
                                            <Box>
                                                <IconButton
                                                    onClick={() =>
                                                        handleEditCollection(collection.id)
                                                    }
                                                    aria-label="edit"
                                                >
                                                    <Edit />
                                                </IconButton>
                                                <IconButton
                                                    onClick={() =>
                                                        handleDeleteCollection(collection.id)
                                                    }
                                                    aria-label="delete"
                                                >
                                                    <Delete />
                                                </IconButton>
                                            </Box>
                                        </Box>
                                    ))}
                            </Container>

                            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                                <Button
                                    variant="contained"
                                    startIcon={<Add />}
                                    onClick={handleCreateCollection}
                                >
                                    {t('createCollectionButton')}
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                )}
            </Container>
            <ModalWindowCollection
                userId={userId}
                isModalOpen={isModalOpen}
                handleCloseModal={handleCloseModal}
            />
        </Box>
    );
};
