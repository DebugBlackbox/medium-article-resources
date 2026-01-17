import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('ImmaJson is here!');
});

app.use((req, res, next, err) => {
  res.status(404).send('404 Not Found');
});

export default app;
