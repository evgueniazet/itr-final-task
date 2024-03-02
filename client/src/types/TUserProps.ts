import { TUser } from './TUser';
import { ERoles } from 'src/enums';

export type TUserProps = {
    user: TUser;
    onRoleChange: (user: TUser, role: ERoles) => void;
    onBlockToggle: (user: TUser) => void;
};
