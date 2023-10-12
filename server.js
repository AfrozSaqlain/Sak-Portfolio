const express = require('express');
const cors = require('cors');
let likesCount = 0;

const app = express();
app.use(cors());

app.get('/likes', (req, res) => {
  res.json({ likes: likesCount });
});

app.post('/likes', (req, res) => {
  likesCount++;
  res.json({ likes: likesCount });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
