var express = require('express');
var router1 = express.Router();

var db = require('../../lib/database')();

//var authMiddleware = require('./middlewares/auth');

router1.get('/', (req,res)=>{
	 db.query(`Select * from tblClinic`, (err,results,fields)=>{
  res.render('Admin-Maintenance-ClinicBranch/views/view' , {re: results});
});
	 });


router1.post('/', (req,res)=>{
 db.query(`Insert into tblClinic (strLocation) values ("${req.body.location}")`, (err,results,fields)=>{
    if(err) console.log(err);
    res.redirect("/Admin_Clinic");
  });

});


exports.Admin_Clinic= router1;

