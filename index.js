const express = require('express');
const app = express();

const PORT = 5000;

app.get('/', home);
app.post('/info', info);

function home(req, res) {
  res.send('Hello world!---');
}

function info(req, res) {
  res.send('Hello from Info!');
}

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
