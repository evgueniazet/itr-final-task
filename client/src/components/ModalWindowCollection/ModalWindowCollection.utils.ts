import { TCustomField, TRequiredFields, TCategory } from './ModalWindowCollection.types';

export const createCollectionData = (
    categories: TCategory[],
    customFields: TCustomField[],
    requiredFields: TRequiredFields,
    image: string,
) => {
    const categoryId = categories.find((item) => item.title === requiredFields.category).id;

    const collectionData = {
        ...requiredFields,
        categoryId,
        image,
        ...(customFields.length > 0
            ? Object.assign({}, ...customFields.map((field) => ({ [field.fieldName]: field.name })))
            : {}),
    };

    return collectionData;
};
