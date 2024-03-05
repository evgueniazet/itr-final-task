import express from 'express';
import model from 'models';
import { routes } from '../constants/routes';
import { IUser, IUserItemModel } from '../interfaces';

const router = express.Router();

router.get(routes.allUsers, async (req, res) => {
    const usersListData: IUserItemModel[] = await model.users.findAll({
        attributes: ['id', 'name', 'surname', 'email', 'role', 'isBlocked'],
    });
    const usersList: IUser[] = usersListData.map((item) => item.dataValues);

    res.json(usersList);
});

export { router };
