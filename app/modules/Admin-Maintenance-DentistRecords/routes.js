var express = require('express');
var router1 = express.Router();

var db = require('../../lib/database')();

//var authMiddleware = require('./middlewares/auth');

router1.get('/', (req,res)=>{
   db.query(`Select * from tbldentist`, (err,results,fields)=>{
    if (err) console.log(err);

    res.render('Admin-Maintenance-DentistRecords/views/view', {re: results});
  });
});


router1.post('/', (req,res)=>{
    db.query(`Insert into tbldentist (strDentistFname, strDentistMname, strDentistLname, strGender, intDentistStatus) values ("${req.body.fname}", "${req.body.mname}", "${req.body.lname}", "${req.body.gender}", ${1} )`, (err,results,fields)=>{
      if(err) console.log(err);

      res.redirect("/Admin_DentistRecord")
  });
});



exports.Admin_DentistRecord= router1;

