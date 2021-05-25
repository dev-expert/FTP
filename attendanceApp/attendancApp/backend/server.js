const express = require('express');
const router = require('./routes');
const app = express();


app.use(express.json());
app.use(router)

const PORT = 3000;

app.listen(PORT, function () {
  console.log('Server is ready at ' + PORT);
});
 