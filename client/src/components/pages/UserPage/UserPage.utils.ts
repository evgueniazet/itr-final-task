import { useState, useEffect } from 'react';
import axios from 'axios';
import { TUser } from 'types/TUser';

export const useGetUserData = (userId: string) => {
    const [user, setUser] = useState<TUser | undefined>();    

    useEffect(() => {
        axios
            .get('http://localhost:3001/users/user', { params: { userId } })
            .then((response) => {
                setUser(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [userId]);

    return user;
};

export const useGetUserCollections = (userId: string) => {
    const [collections, setCollections] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3001/collections/all-collections', {
                params: { userId },
            })
            .then((response) => {
                setCollections(response.data);
            })
            .catch((error) => {
                console.error('Error fetching collections:', error);
            });
    }, [userId]);

    return collections;
};


