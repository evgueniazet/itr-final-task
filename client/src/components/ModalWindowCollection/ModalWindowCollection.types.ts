import { TCollection } from 'types/TCollection';

export type TModalWindowCollectionProps = {
    userId: string;
    isModalOpen: boolean;
    handleCloseModal: () => void;
};

export type TCustomField = {
    id: number;
    fieldName: string;
    type: string;
    name: string;
};

export type TRequiredFields = Omit<TCollection, 'id'>;

export type TCategory = {
    id: number;
    title: string;
};
