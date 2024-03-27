import { TItemInCollection } from 'types/TItemInCollection';

export type TItemsListProps = {
    items: TItemInCollection[];
    onEdit: (item: TItemInCollection) => void;
    onDelete: (id: number) => void;
};