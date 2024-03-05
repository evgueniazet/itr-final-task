'use client';

import { useState, useEffect } from 'react';
import { Typography, Box, CircularProgress, Backdrop, useTheme } from '@mui/material';
import { UserRow } from 'components/UserRow';
import { TUser } from 'types/TUser';
import { ERoles } from 'enums/index';

export const UsersPage = () => {
    const [showLoader, setShowLoader] = useState(false);
    const [users, setUsers] = useState([]);
    const theme = useTheme();

    const columnTitles = ['ID', 'Name', 'Surname', 'Email', 'Role', 'Block'];

    useEffect(() => {
        fetch('http://localhost:3001/users/all-users')
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const toggleBlock = (user: TUser) => {
        const newUser = users.map((item: TUser) =>
            item.id === user.id ? { ...item, blocked: !user.isBlocked } : item,
        );
        setUsers(newUser);
        simulateServerRequest();
    };

    const handleChangeRole = (user: TUser, role: ERoles) => {
        setShowLoader(true);
        const newUsers = users.map((item: TUser) =>
            item.id === user.id ? { ...user, role } : item,
        );
        setUsers(newUsers);
        simulateServerRequest();
    };

    const simulateServerRequest = () => {
        setTimeout(() => {
            setShowLoader(false);
        }, 5000);
    };

    return (
        <>
            <Typography
                variant="h4"
                gutterBottom
                sx={{ textAlign: 'center', color: theme.palette.text.primary, mt: '20px' }}
            >
                Users
            </Typography>
            {users.length > 0 ? (
                <>
                    <Box sx={{ display: 'flex', alignItems: 'center', p: 1 }}>
                        {columnTitles.map((title, index) => (
                            <Typography
                                key={index}
                                variant={index === 0 ? 'h6' : 'body1'}
                                sx={{
                                    flex: 1,
                                    color: theme.palette.text.primary,
                                }}
                            >
                                {title}
                            </Typography>
                        ))}
                    </Box>
                    {users.map((user: TUser) => (
                        <UserRow
                            key={user.id}
                            user={user}
                            onRoleChange={handleChangeRole}
                            onBlockToggle={toggleBlock}
                        />
                    ))}
                </>
            ) : (
                <Typography
                    variant="body1"
                    sx={{ textAlign: 'center', color: theme.palette.text.primary }}
                >
                    No users found.
                </Typography>
            )}
            <Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} open={showLoader}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    );
};
