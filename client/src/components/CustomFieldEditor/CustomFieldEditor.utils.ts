import { ECustomFieldsTypes } from 'enums/ECustomFieldsTypes';

export const getCustomFieldName = (type: string, number: number): string => {
    switch (type) {
        case ECustomFieldsTypes.DATE:
            return `custom_date${number}_name`;
        case ECustomFieldsTypes.LOGICAL:
            return `custom_boolean${number}_name`;
        case ECustomFieldsTypes.NUMERIC:
            return `custom_int${number}_name`;
        case ECustomFieldsTypes.STRING:
            return `custom_string${number}_name`;
        case ECustomFieldsTypes.TEXT:
            return `custom_text${number}_name`;
    }
};
