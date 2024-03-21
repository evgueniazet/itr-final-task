import { Dispatch, SetStateAction } from 'react';
import { TCustomField } from 'components/ModalWindowCollection/ModalWindowCollection.types';

export type TCustomFieldEditorProps = {
    customFields: TCustomField[];
    setCustomFields: Dispatch<SetStateAction<TCustomField[]>>;
};