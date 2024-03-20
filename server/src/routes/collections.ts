import express from 'express';
import model from 'models';
import { routes } from '../constants/routes';
import { ICollection, ICollectionItemModel } from '../interfaces';
import { EErrorMessages } from 'enums/EErrorMessages';

const router = express.Router();

router.get(routes.allCollections, async (req, res) => {
    const { userId } = req.query;

    const collectionsListData: ICollectionItemModel[] = await model.collections.findAll({
        where: { userId },
        attributes: ['id', 'title', 'userId'],
    });

    const collectionsList: ICollection[] = collectionsListData.map((item) => item.dataValues);

    res.json(collectionsList);
});

router.post(routes.createCollection, async (req, res) => {
    const { title, userId } = req.body;

    if (!title || !userId) {
        return res.status(400).json(EErrorMessages.NOT_ENOUGH_DATA_TO_CREATE_COLLECTION);
    }

    const newCollection: ICollectionItemModel = await model.collections.create({
        title,
        userId,
    });

    res.status(201).json(newCollection);
});


router.post(routes.deleteCollection, async (req, res) => {

    const { collectionId } = req.body;

    const collection = await model.collections.findByPk(collectionId);

    if (!collection) {
        return res.status(500).json({ error: { message: EErrorMessages.COLLECTION_NOT_FOUND } });
    }

    await collection.destroy();

    res.status(200).json(collection);

});

export { router };
