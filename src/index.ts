import express from 'express';

const app = express();

app.listen(3000, () => {
  console.log('app listen on http://localhost:3000');
});
