const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.static('client/dist'));

app.listen(PORT, (err) => {
  if(err) {
    console.err('Failed to start server');
  } else {
    console.log(`Server started on port ${PORT}.`)
  }
});
