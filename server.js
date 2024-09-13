const express = require('express');
const handlebars = require('express-handlebars');
const appRoutes = require('./routes/approutes');
app = express();

const {sequelize, Sequelize} = require('./config/database')
const booksModel = require("./models/books")(sequelize,Sequelize)

app.use (express.urlencoded({extended:false}));
app.use (express.json());

var hbs=handlebars.create({defaultLayout:'main'});
app.engine('handlebars',hbs.engine);
app.set('view engine','handlebars');
app.use(appRoutes);
app.listen(3000, () => {
    console.log("Server running at 3000");
})
