import { TItemInCollection } from 'types/TItemInCollection';

export type TItemCardProps = {
    item: TItemInCollection;
    onEdit: (item: TItemInCollection) => void;
    onDelete: (id: number) => void;
};
