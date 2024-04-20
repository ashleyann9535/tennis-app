const express = require('express');
const cors = require('cors')

const app = express();
app.use(cors());
//allows json objects to be posted
app.use(express.json());
//allows json objects with strings and arrays
app.use(express.urlencoded({extended: true}));

//import mongo config file to db collection
require('./config/mongoose.config');

//importing the routes to be exported using express(app)
//could be also done how we are importing and using express in the file
require('./routes/court.routes')(app);

const port = 8000;
app.listen(port, () => console.log(`Listening on port: ${port}`));