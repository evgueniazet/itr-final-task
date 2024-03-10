import express from 'express';
import model from 'models';
import { routes } from '../constants/routes';
import { ICollectionItemModel } from '../interfaces';
import { EErrorMessages } from 'enums';

const router = express.Router();

router.get(routes.itemInCollection, async (req, res) => {
    const { collectionId, itemId } = req.params;

    const itemInCollection: ICollectionItemModel | null = await model.itemInCollection.findOne({
        where: { collectionId, id: itemId },
    });

    if (!itemInCollection) {
        return res
            .status(500)
            .json({ error: { message: EErrorMessages.ITEM_IN_COLLECTION_NOT_FOUND } });
    }

    res.status(200).json(itemInCollection);
});

export { router };
