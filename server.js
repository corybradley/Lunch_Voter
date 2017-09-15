const express = require('express');
const app = express();

const server = app/listen(8000, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log('App listening at http://${host}:${port}`);
});
