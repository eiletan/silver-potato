import dotenv from 'dotenv';
import express from 'express';
dotenv.config();
const app: express = express();
const port: string  = process.env.PORT as string;

app.get('/', (req, res) => {
  res.send('We are going on a trip');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});