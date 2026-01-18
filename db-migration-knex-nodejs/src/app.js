import express from 'express';
import userRoutes from './routes/users.js';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('ImmaJson is here!');
});

app.use('/users', userRoutes);

app.use((req, res, next, err) => {
  res.status(404).send('404 Not Found');
});

export default app;
