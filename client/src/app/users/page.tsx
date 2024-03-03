'use client';

import { useState } from 'react';
import { Typography, Box, CircularProgress, Backdrop } from '@mui/material';
import { UserRow } from 'components/UserRow';
import { TUser } from 'types/TUser';
import { ERoles } from 'enums/index';

const USERS_MOCK: TUser[] = [
    {
        id: 1,
        email: 'user1@example.com',
        name: 'user1',
        role: 'user',
        blocked: false,
    },
    {
        id: 2,
        email: 'user2@example.com',
        name: 'user2',
        role: 'admin',
        blocked: true,
    },
    {
        id: 3,
        email: 'user3@example.com',
        name: 'user3',
        role: 'user',
        blocked: false,
    },
];

const Users = () => {
    const [users, setUsers] = useState<TUser[]>(USERS_MOCK);
    const [showLoader, setShowLoader] = useState(false);

    const toggleBlock = (user: TUser) => {
        const newUser = users.map((item) =>
            item.id === user.id ? { ...item, blocked: !user.blocked } : item,
        );
        setUsers(newUser);
        simulateServerRequest();
    };

    const handleChangeRole = (user: TUser, role: ERoles) => {
        setShowLoader(true);
        const newUsers = users.map((item) => (item.id === user.id ? { ...user, role } : item));
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
                sx={{ textAlign: 'center', color: '#000', mt: '20px' }}
            >
                Users
            </Typography>
            <Box>
                {users.map((user) => (
                    <UserRow
                        key={user.id}
                        user={user}
                        onRoleChange={handleChangeRole}
                        onBlockToggle={toggleBlock}
                    />
                ))}
            </Box>
            <Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} open={showLoader}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    );
};

export default Users;
