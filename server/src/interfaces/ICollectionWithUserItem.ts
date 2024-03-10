import { ICollection } from './ICollection';
import { IUser } from './IUser';

export interface ICollectionWithUserItem extends ICollection {
    user: IUser;
}
