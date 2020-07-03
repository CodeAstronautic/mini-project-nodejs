const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))



const tasks = require("./app/routes/task.route");
app.use("api/v1", tasks);

const users = require("./app/routes/user.route");
app.use("/api/v1", users);

const leads = require('./app/routes/leads.route')
app.use("/api/v1", leads);

const roles = require('./app/routes/roles.route')
app.use("/api/v1", roles);


// Configuring the database
const dbConfig = require('./config/database.config');
const { createUser } = require('./app/controllers/user.controller');

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useFindAndModify: false
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});


