const express = require('express');

const allRoutes = require('./controllers');

const sequelize = require('./config/connection');

const cors = require("cors")

// Sets up the Express App
// =============================================================
const app = express();
app.use(cors())
const PORT = process.env.PORT || 3001;
// Requiring our models for syncing
const {Animal} = require('./models/Animal');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/',allRoutes);

sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
    });
});
