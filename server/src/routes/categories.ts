import express from 'express';
import model from 'models';
import { routes } from '../constants/routes';
import { ICategory, ICategoryModel } from '../interfaces';

const router = express.Router();

router.get(routes.allCategories, async (_, res) => {
    const categoriesListData: ICategoryModel[] = await model.categories.findAll({
        attributes: ['id', 'title'],
    });

    const categoriesList: ICategory[] = categoriesListData.map((item) => item.dataValues);

    res.json(categoriesList);
});

export { router };
