import 'module-alias/register';
import express from 'express';
import cors from 'cors';
import appConfig from 'config/config';
import db from 'models';
import { router as usersRouter } from './routes/users';

const server = express();

server.use(express.json());
server.use(cors());
server.use('/users', usersRouter);

db.sequelize.sync({ alter: true }).then(() => {
    server.listen(appConfig.PORT, () => {
        console.warn(`Server is running on port: http://localhost:${appConfig.PORT}`);
    });
});
