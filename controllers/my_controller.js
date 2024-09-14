const { sequelize, Sequelize } = require('../config/database');
const bookModel = require("../models/books")(sequelize,Sequelize)

exports.showAll = (req,res)=> {

    bookModel.findAll(
        {
          order:[['title','ASC']]
    }
    ).then(results=> {
        console.log(results);
        res.render('showAllView',{ layout:false, results_form:results })
    }).catch(err => {
        res.status(500).send({message: "Error" + err.message})
    })


}


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