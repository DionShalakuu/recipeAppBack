require('dotenv').config();
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
app.use(bodyParser.json({ extended: true }));
app.use(cors());

app.use('/servertest', (req, res) => res.send('Server is up and running!'));
// Routes
app.use('/recipe', require('./routes/recipe'));
app.use('/ingredient', require('./routes/ingredient'));
app.use('/unit', require('./routes/unit'));


app.listen(process.env.PORT, () => {
    console.log(`Application is running on Port: ${process.env.PORT}`);
});
require("./db/db");

console.log(new Date)