const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


const PORT = 3333;

app.listen(3000);
console.log(`App is running on port ${PORT}`)
