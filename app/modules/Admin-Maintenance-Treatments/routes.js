var express = require('express');
var router1 = express.Router();

var db = require('../../lib/database')();

//var authMiddleware = require('./middlewares/auth');

router1.get('/', (req,res)=>{
  db.query(`Select * from tblservices`, (err,results,fields)=>{
    if (err) console.log(err);
console.log(results);
    res.render('Admin-Maintenance-Treatments/views/view', {re: results});
  });
});



router1.post('/', (req,res)=>{
     db.query(`Insert into tblServices (strServiceName, strServiceDescription, fltReferencePrice) values ("${req.body.treatment}", "${req.body.description}", ${req.body.estimated})`, (err,results,fields)=>{
      if(err) console.log(err);

    

        res.redirect("/Admin_Treatment");
  
    });
});




exports.Admin_Treatment= router1;

