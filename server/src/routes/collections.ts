import express from 'express';
import model from 'models';
import { routes } from '../constants/routes';
import { ICollection, ICollectionItemModel } from '../interfaces';

const router = express.Router();

router.get(routes.allCollections, async (req, res) => {
    const { userId } = req.query;

    console.log('req.body', req.body);
    
    const collectionsListData: ICollectionItemModel[] = await model.collections.findAll({
        where: { userId },
        attributes: ['id', 'title', 'userId'],
    });

    const collectionsList: ICollection[] = collectionsListData.map((item) => item.dataValues);

    res.json(collectionsList);
});

export { router };
