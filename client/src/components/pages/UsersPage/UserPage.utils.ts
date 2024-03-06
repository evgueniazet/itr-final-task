import { useEffect, useState } from 'react';
import axios from 'axios';
import { TUser } from 'types/TUser';
import { ERoles } from 'enums/ERoles';

export const useGetUsersData = () => {
    const [showLoader, setShowLoader] = useState(false);
    const [users, setUsers] = useState<TUser[] | undefined>();

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

    const handleUserBlock = (user: TUser, users: TUser[]) => {
        setShowLoader(true);

        axios
            .post('http://localhost:3001/users/update-user-block-status', {
                userId: user.id,
                isBlocked: !user.isBlocked,
            })
            .then(() => {
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
            .then(() => {
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

    return { users, showLoader, handleUserBlock, handleChangeRole };
};