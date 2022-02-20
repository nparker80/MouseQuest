require('dotenv').config();
const clc = require("cli-color");
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const routes = require('./routes');
const sequelize = require('./config');
const helpers = require('./utils/helpers');
const hbs = exphbs.create({
	helpers,
});
const app = express();
const PORT = process.env.PORT || 3001;
const sessionSettings = {
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: false,
};

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sessionSettings));
app.use(routes);
sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log(clc.blue(`Server listening on port ${PORT}`)));
});