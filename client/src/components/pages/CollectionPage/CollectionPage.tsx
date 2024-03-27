'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Box, Button, TextField } from '@mui/material';
import { Add, Save } from '@mui/icons-material';
import { useItemsCollection } from './CollectionPage.utils';
import { ItemsList } from 'components/ItemsList/ItemsList';
import { TItemInCollection } from 'types/TItemInCollection';

export const CollectionPage = () => {
    const searchParams = useSearchParams();
    const collectionId = searchParams.get('collectionId');
    const { useGetItemsInCollection, useCreateItemInCollection } = useItemsCollection();
    const items = useGetItemsInCollection(collectionId);
    const [newItemTitle, setNewItemTitle] = useState('');
    const [newItemTags, setNewItemTags] = useState([]);
    const [isCreatingNewItem, setIsCreatingNewItem] = useState(false);

    const handleEdit = () => {
        console.log('edit item');
    };

    const handleDelete = () => {
        console.log('delete item');
    };

    const handleCreateItem = () => {
        setIsCreatingNewItem(true);
    };

    const handleSaveNewItem = async () => {
        const itemData: TItemInCollection = {
            collectionId,
            title: newItemTitle,
            tags: newItemTags,
            id: 0,
        };

        await useCreateItemInCollection(itemData);
        setNewItemTitle('');
        setNewItemTags([]);
        setIsCreatingNewItem(false);
    };

    return (
        <>
            <h1>Collection Page</h1>
            <ItemsList items={items} onEdit={handleEdit} onDelete={handleDelete} />
            {isCreatingNewItem ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <TextField
                        label="New Item Title"
                        value={newItemTitle}
                        onChange={(e) => setNewItemTitle(e.target.value)}
                        sx={{ mr: 1 }}
                    />
                    <TextField
                        label="New Item Tags"
                        value={newItemTags.join(', ')}
                        onChange={(e) =>
                            setNewItemTags(e.target.value.split(',').map((tag) => tag.trim()))
                        }
                        sx={{ mr: 1 }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<Save />}
                        onClick={handleSaveNewItem}
                    >
                        Save
                    </Button>
                </Box>
            ) : (
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                    <Button variant="contained" startIcon={<Add />} onClick={handleCreateItem}>
                        Create item
                    </Button>
                </Box>
            )}
        </>
    );
};
