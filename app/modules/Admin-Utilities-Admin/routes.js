var express = require('express');
var router1 = express.Router();

var db = require('../../lib/database')();

//var authMiddleware = require('./middlewares/auth');

router1.get('/', (req,res)=>{
  db.query(`Select * from tblAdmin JOIN tblClinic ON tblAdmin.intClinicNo=tblClinic.intClinicNo`, (err,results,fields)=>{
    if (err) console.log(err);
console.log(results);
    res.render('Admin-Utilities-Admin/views/view', {re: results});
  });
});



router1.post('/', (req,res)=>{
     db.query(`Insert into tblAdmin (strFName, strMName, strLName, intClinicNo, strEmail, strPassword) values ("${req.body.treatment}", "${req.body.description}", ${req.body.estimated})`, (err,results,fields)=>{
      if(err) console.log(err);

    

        res.redirect("/Admin_Treatment");
  
    });
});




exports.Admin_Admin= router1;

