'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import {
    Container,
    Typography,
    Button,
    Box,
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    CircularProgress,
} from '@mui/material';
import { TUser } from 'types/TUser';
import { useGetUsersData } from 'components/pages/UsersPage/UsersPage.utils';

export const UserPage = () => {
    const [user, setUser] = useState<TUser | null>();
    const [newCollectionName, setNewCollectionName] = useState('');
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const { getUserData } = useGetUsersData();
    const searchParams = useSearchParams();

    const userId = searchParams.get('userId');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData: TUser = await getUserData(Number(userId));
                setUser(userData);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        if (userId) {
            fetchData();
        }
    }, []);

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100vw',
                height: '100vh',
            }}
        >
            <Container
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {isLoading ? (
                    <div
                    >
                        <CircularProgress />
                    </div>
                ) : (
                    user && (
                        <Box sx={{ display: 'inline-block' }}>
                            <Typography variant="subtitle1">User ID: {user.id}</Typography>
                            <Typography variant="subtitle1">Name: {user.name}</Typography>
                            <Typography variant="subtitle1">Surname: {user.surname}</Typography>
                            <Typography variant="subtitle1">Email: {user.email}</Typography>
                            <Typography variant="subtitle1">Role: {user.role}</Typography>
                        </Box>
                    )
                )}

                <div>
                    <Button onClick={() => setIsDialogOpen(true)}>Create New Collection</Button>
                    <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
                        <DialogTitle>Create New Collection</DialogTitle>
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="collectionName"
                                label="Collection Name"
                                type="text"
                                fullWidth
                                value={newCollectionName}
                                onChange={(e) => setNewCollectionName(e.target.value)}
                            />
                            <Button>Create</Button>
                        </DialogContent>
                    </Dialog>
                </div>
            </Container>
        </Box>
    );
};
