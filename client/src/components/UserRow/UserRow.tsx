import { Box, Button, Select, MenuItem, Typography, useTheme } from '@mui/material';
import { TUserRowProps } from './UserRow.types';
import { ERoles, EUserBlockStatuses } from 'enums/index';

export const UserRow = ({ user, onRoleChange, onUserBlock }: TUserRowProps) => {
    const theme = useTheme();

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', p: 1 }}>
            <Typography variant="h6" sx={{ flex: 1, color: theme.palette.text.primary }}>
                {user.id}
            </Typography>
            <Typography sx={{ flex: 1, color: theme.palette.text.primary }}>{user.name}</Typography>
            <Typography sx={{ flex: 1, color: theme.palette.text.primary }}>
                {user.surname}
            </Typography>
            <Typography sx={{ flex: 1, color: theme.palette.text.primary }}>
                {user.email}
            </Typography>
            <Select
                value={user.role}
                onChange={(e) => onRoleChange(user, e.target.value as ERoles)}
                sx={{ flex: 1, mr: 1 }}
            >
                <MenuItem value={ERoles.ADMIN}>Admin</MenuItem>
                <MenuItem value={ERoles.USER}>User</MenuItem>
            </Select>
            <Button onClick={() => onUserBlock(user)} sx={{ flex: 1 }}>
                {user.isBlocked ? EUserBlockStatuses.UNBLOCK : EUserBlockStatuses.BLOCK}
            </Button>
        </Box>
    );
};
