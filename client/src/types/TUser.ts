import { ERoles } from 'enums/ERoles';
import { ICollection } from 'src/interfaces';

export type TUser = {
    id: number;
    name: string;
    surname: string;
    email: string;
    role: ERoles;
    isBlocked: boolean;
    collections?: ICollection[];
};
