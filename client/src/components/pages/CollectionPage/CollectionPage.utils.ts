import { useEffect, useState } from 'react';
import axios from 'axios';
import { TItemInCollection } from 'types/TItemInCollection';

export const useItemsCollection = () => {
    const [items, setItems] = useState([]);

    const useGetItemsInCollection = (collectionId: string) => {
        useEffect(() => {
            axios
                .get('http://localhost:3001/items/all-items-in-collection', {
                    params: { collectionId },
                })
                .then((response) => {
                    setItems(response.data);
                })
                .catch((error) => {
                    console.error('Error fetching items in collection:', error);
                });
        }, [collectionId]);

        return items;
    };

    const useCreateItemInCollection = (itemData: TItemInCollection) => {
        axios
            .post('http://localhost:3001/items/create-item', { ...itemData })
            .then((response) => {
                const newItem = { ...itemData, id: response.data.id };
                const updatedItems = [...items, newItem];
                setItems(updatedItems);
            })
            .catch((error) => {
                console.error('Error creating item in collection', error);
            });
    };

    const useDeleteItemInCollection = (itemId: number) => {
        axios
            .post('http://localhost:3001/items/delete-item', { itemId })
            .then(() => {
                const updatedCollections = items.filter((item) => item.id !== itemId);
                setItems(updatedCollections);
            })
            .catch((error) => {
                console.error('Error deleting item in collection', error);
            });
    };

    return { useGetItemsInCollection, useCreateItemInCollection, useDeleteItemInCollection };
};
