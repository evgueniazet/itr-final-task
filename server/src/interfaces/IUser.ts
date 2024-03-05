import { ERoles } from 'enums/ERoles';

export interface IUser {
    id: number;
    name: string;
    surname: string;
    email: string;
    role: ERoles;
    isBlocked: boolean;
}
