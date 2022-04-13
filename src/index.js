import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import routes from './routes';
import models from './models';
import { v4 as uuidv4 } from 'uuid';

const port = process.env.PORT;
const app = express();

app.use('/session', routes.session);
app.use('users', routes.user);
app.use('/messages', routes.message);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.context = {
    models,
    me: models.users[1],
  };
  next();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
