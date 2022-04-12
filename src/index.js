import 'dotenv/config';
import cors from 'cors';
import express from 'express';
const port = process.env.PORT;
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hellow World!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
