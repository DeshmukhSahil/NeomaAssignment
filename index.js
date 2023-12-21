const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const userRoutes = require('./routes/userRoutes');

require('dotenv').config();
require('./db');
const PORT = 3000;

app.use(bodyParser.json());
app.use('/users', userRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
