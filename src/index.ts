import express from 'express';

const app = express();

app.use(express.json());
app.get('/test', (req, res) => {
  res.json({
    hello: 'word',
  });
});

app.listen(process.env.PORT ?? 3000, () => {
  console.log('app listen on http://localhost:3000');
});
