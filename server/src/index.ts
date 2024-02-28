import 'module-alias/register';
import express from 'express';
import appConfig from 'config/config';
import db from 'models';

const server = express();

server.use(express.json());

db.sequelize.sync().then(() => {
    server.listen(appConfig.PORT, () => {
        console.warn(`Server is running on port: http://localhost:${appConfig.PORT}`);
    });
});
