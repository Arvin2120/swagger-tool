import express from 'express';
import myRouter from './routes/users.js';
const app = express();
const port = 3000;
app.use('/', myRouter);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
