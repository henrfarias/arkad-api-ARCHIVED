import 'reflect-metadata';
import { config } from 'dotenv';
import app from './app';

config();

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on: http://localhost:${process.env.PORT}`);
});
