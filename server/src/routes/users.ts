import express from 'express';
import model from 'models';
import { routes } from '../constants/routes';
import { IUser, IUserItemModel } from '../interfaces';
import { EErrorMessages } from 'enums';

const router = express.Router();

router.get(routes.allUsers, async (req, res) => {
    const usersListData: IUserItemModel[] = await model.users.findAll({
        attributes: ['id', 'name', 'surname', 'email', 'role', 'isBlocked'],
    });
    const usersList: IUser[] = usersListData.map((item) => item.dataValues);

    res.json(usersList);
});

router.post(routes.updateUserRole, async (req, res) => {
    const { userId, newRole } = req.body;
    const user = await model.users.findByPk(userId);

    if (!user) {
        return res.status(500).json({ error: { message: EErrorMessages.USER_NOT_FOUND } });
    }

    await user.update({ role: newRole });

    res.status(200).json(user);
});

router.post(routes.updateUserBlockStatus, async (req, res) => {
    const { userId, isBlocked } = req.body;
    const user = await model.users.findByPk(userId);

    if (!user) {
        return res.status(500).json({ error: { message: EErrorMessages.USER_NOT_FOUND } });
    }

    await user.update({ isBlocked });

    res.status(200).json(user);
});

router.post(routes.deleteUser, async (req, res) => {
    const { userId } = req.body;
    const user = await model.users.findByPk(userId);

    if (!user) {
        return res.status(500).json({ error: { message: EErrorMessages.USER_NOT_FOUND } });
    }

    await user.destroy();

    res.status(200).json(user);
});

export { router };
