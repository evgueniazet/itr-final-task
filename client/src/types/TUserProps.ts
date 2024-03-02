import { ERoles } from 'src/enums';
import { TUser } from './TUser';

export type TUserProps = {
    user: TUser;
    onRoleChange: (user: TUser, role: ERoles) => void;
    onBlockToggle: (user: TUser) => void;
};
