import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import todoRoutes from './api/routes/todosRoutes';
import Promise from 'bluebird';

const port = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.json());
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/games', { useMongoClient: true });

app.use('/api/todos', todoRoutes);

app.get('/*', (req, res) => {
  res.send('Hello from expres!')
});

app.listen('8080', () => {
  console.log(`Server is runing at http://localhost:${port}/`);
});
