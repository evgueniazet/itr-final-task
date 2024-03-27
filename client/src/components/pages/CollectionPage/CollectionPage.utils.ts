import { useEffect, useState } from 'react';
import axios from 'axios';

export const useItemsCollection = () => {
    const [items, setItems] = useState();
    const useGetItemsInCollection = (collectionId: string) => {
        useEffect(()=> {
            axios.get('http://localhost:3001/items/all-items-in-collection', {params : {collectionId}})
                 .then((response) => {
                    setItems(response.data);
                 })
                 .catch((error) => {
                    console.error('Error fetching items in collection:', error)
                 })
        },[collectionId]);

        return items;
    };

    return { useGetItemsInCollection };
};
