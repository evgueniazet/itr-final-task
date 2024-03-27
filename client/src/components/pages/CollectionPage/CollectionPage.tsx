'use client';

import { useSearchParams } from 'next/navigation';
import { useItemsCollection } from './CollectionPage.utils';
import { ItemsList } from 'components/ItemsList/ItemsList';

export const CollectionPage = () => {
    const searchParams = useSearchParams();
    const collectionId = searchParams.get('collectionId');
    const { useGetItemsInCollection } = useItemsCollection();
    const items = useGetItemsInCollection(collectionId);

    const handleEdit = () => {
        console.log('edit item');
    };

    const handleDelete = () => {
        console.log('delete item');
    };

    return (
        <>
            <h1>Collection Page</h1>
            <ItemsList items={items} onEdit={handleEdit} onDelete={handleDelete} />
        </>
    );
};
