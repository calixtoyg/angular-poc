
const express = require('express');

const app = express();

app.use(express.static('./dist/angular-poc'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/angular-poc/'}),
);

app.listen(process.env.PORT || 8080);
