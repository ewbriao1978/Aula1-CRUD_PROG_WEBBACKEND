const { sequelize, Sequelize } = require('../config/database');
const bookModel = require("../models/books")(sequelize,Sequelize)

exports.show = (req,res) =>{

    res.render("show",{layout:false,
         title:req.body.title,
         description:req.body.description
    })

}

exports.insertData = (req,res) =>
{
    const bookData = {
        title:req.body.title,
        description:req.body.description
    };

    bookModel.create(bookData).then(data=> {
        console.log("Book inserted");
        res.redirect('/');
    }).catch(err => {
        console.log("Error" + err);
    })

}

exports.showForm = (req,res) =>{
    res.render("form",{layout:false})
}