import express from 'express';
import model from 'models';
import { routes } from '../constants/routes';
import { ICollection, ICollectionItemModel, ICollectionWithUserItem, IUser } from '../interfaces';

const router = express.Router();

router.get(routes.allCollections, async (req, res) => {
    const { userId } = req.body;

    const collectionsListData: ICollectionItemModel[] = await model.collections.findAll({
        where: { userId },
        attributes: ['id', 'title', 'userId'],
    });

    const collectionsList: ICollection[] = collectionsListData.map((item) => item.dataValues);

    const collectionsWithUsers = await Promise.all(
        collectionsList.map(async (collection) => {
            const user: IUser = await model.users.findOne({
                where: { id: collection.userId },
                attributes: ['id', 'name', 'surname', 'email', 'role', 'isBlocked'],
            });

            const collectionWithUser: ICollectionWithUserItem = {
                ...collection,
                user,
            };

            return collectionWithUser;
        }),
    );

    res.json(collectionsWithUsers);
});

export { router };
