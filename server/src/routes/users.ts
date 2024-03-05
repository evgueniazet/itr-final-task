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

router.post(routes.updateUserRole, async (req, res) => {
    const { userId, newRole } = req.body;
    const user = await model.users.findByPk(userId);

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    await user.update({ role: newRole });

    res.json({ message: 'User role updated successfully' });
});

router.post(routes.updateUserBlockStatus, async (req, res) => {
    const { userId, isBlocked } = req.body;
    const user = await model.users.findByPk(userId);

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    await user.update({ isBlocked });

    res.json({ message: 'User block status updated successfully' });
});

export { router };
