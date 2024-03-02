import React from 'react';
import { Box, Button, Select, MenuItem, Typography, useTheme } from '@mui/material';
import { TUserProps } from 'src/types/TUserProps';
import { ERoles, EUserBlockStatuses } from 'src/enums';

export const UserRow = ({ user, onRoleChange, onBlockToggle }: TUserProps) => {
    const theme = useTheme();

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', p: 1 }}>
            <Typography variant="h6" sx={{ flex: 1, color: theme.palette.text.primary }}>
                ID: {user.id}
            </Typography>
            <Typography sx={{ flex: 1, color: theme.palette.text.primary }}>
                Name: {user.name}
            </Typography>
            <Typography sx={{ flex: 1, color: theme.palette.text.primary }}>
                Email: {user.email}
            </Typography>
            <Select
                value={user.role}
                onChange={(e) => onRoleChange(user, e.target.value as ERoles)}
                sx={{ flex: 1, mr: 1 }}
            >
                <MenuItem value={ERoles.ADMIN}>Admin</MenuItem>
                <MenuItem value={ERoles.USER}>User</MenuItem>
            </Select>
            <Button onClick={() => onBlockToggle(user)} sx={{ flex: 1 }}>
                {user.blocked ? EUserBlockStatuses.UNBLOCK : EUserBlockStatuses.BLOCK}
            </Button>
        </Box>
    );
};
