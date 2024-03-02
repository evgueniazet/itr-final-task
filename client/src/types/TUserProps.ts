import { ERoles } from 'enums/index';
import { TUser } from './TUser';

export type TUserProps = {
    user: TUser;
    onRoleChange: (user: TUser, role: ERoles) => void;
    onBlockToggle: (user: TUser) => void;
};
