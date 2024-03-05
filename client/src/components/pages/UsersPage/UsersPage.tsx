'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Box, CircularProgress, Backdrop, useTheme } from '@mui/material';
import { UserRow } from 'components/UserRow';
import { TUser } from 'types/TUser';
import { ERoles } from 'enums/index';

export const UsersPage = () => {
    const [showLoader, setShowLoader] = useState(false);
    const [users, setUsers] = useState(null);
    const theme = useTheme();

    const columnTitles = ['ID', 'Name', 'Surname', 'Email', 'Role', 'Block'];

    useEffect(() => {
        setShowLoader(true);
        axios
            .get('http://localhost:3001/users/all-users')
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            })
            .finally(() => {
                setShowLoader(false);
            });
    }, []);

    const toggleBlock = (user: TUser) => {
        setShowLoader(true);
        axios
            .post('http://localhost:3001/users/update-user-block-status', {
                userId: user.id,
                isBlocked: !user.isBlocked,
            })
            .then((response) => {
                const updatedUsers = users.map((item: TUser) =>
                    item.id === user.id ? { ...item, isBlocked: !user.isBlocked } : item,
                );
                setUsers(updatedUsers);
            })
            .catch((error) => {
                console.error('Error updating user block status:', error);
            })
            .finally(() => {
                setShowLoader(false);
            });
    };

    const handleChangeRole = (user: TUser, role: ERoles) => {
        setShowLoader(true);

        axios
            .post('http://localhost:3001/users/update-user-role', {
                userId: user.id,
                newRole: role,
            })
            .then((response) => {
                const newUser = users.map((item: TUser) =>
                    item.id === user.id ? { ...item, role } : item,
                );
                setUsers(newUser);
            })
            .catch((error) => {
                console.error('Error updating user role:', error);
            })
            .finally(() => {
                setShowLoader(false);
            });
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
            {users !== null
                ? users.map((user: TUser) => (
                      <UserRow
                          key={user.id}
                          user={user}
                          onRoleChange={handleChangeRole}
                          onBlockToggle={toggleBlock}
                      />
                  ))
                : null}
            <Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} open={showLoader}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    );
};
