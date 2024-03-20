import { useState, useEffect } from 'react';
import axios from 'axios';
import { TUser } from 'types/TUser';

export const useUser = () => {
    const [user, setUser] = useState<TUser | undefined>();
    const [collections, setCollections] = useState([]);

    const useGetUserData = (userId: string) => {
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

    const useGetUserCollections = (userId: string) => {
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

    const deleteCollection = (collectionId: number) => {
        axios
            .post('http://localhost:3001/collections/delete-collection', { collectionId })
            .then(() => {
                const updatedCollections = collections.filter(
                    (collection) => collection.id !== collectionId,
                );
                setCollections(updatedCollections);
            })
            .catch((error) => {
                console.error('Error deleting collection:', error);
            });
    };

    return { useGetUserData, useGetUserCollections, deleteCollection };
};
