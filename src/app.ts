import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.json({
    status: 200,
    message: 'App is running.',
  });
});

app.listen(3000, () => {
  console.log(`Server is listening on port 3000`);
});
