require('dotenv').config();
require("./config/db");
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');

app.use(bodyParser.json({ extended: true }));

//Custom middleware logger
app.use(logger);

//Cross Origin Resource Sharing
app.use(cors(corsOptions));


// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

//Upload files
app.use("/uploads", express.static(process.cwd() + "/uploads"));
//serve static files
app.use('/', express.static(path.join(__dirname, '/public')));
//Test Api
app.use('/servertest', (req, res) => res.send('Server is up and running!'));

// Routes
app.use('/recipe', require('./routes/recipe'));
app.use('/ingredient', require('./routes/ingredient'));
app.use('/unit', require('./routes/unit'));



app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ "error": "404 Not Found" });
    } else {
        res.type('txt').send("404 Not Found");
    }
});


//Error Handle
app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log(`Application is running on Port: ${process.env.PORT}`);
});

console.log(new Date)