import app from './app';
import 'dotenv';

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on: http://localhost:${process.env.PORT}`);
});
