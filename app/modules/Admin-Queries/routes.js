var express = require('express');
var router1 = express.Router();

var db = require('../../lib/database')();

//var authMiddleware = require('./middlewares/auth');

router1.get('/queries', (req,res)=>{
  res.render('Admin-Queries/views/view', {selected: 0});
});


router1.get('/accomodated', (req,res)=>{

  db.query(`select tblpatient.intpatientno, strPatientFname, strPatientMname, strPatientLname from tblpatient
	join tbltransaction on tbltransaction.intpatientno = tblpatient.intpatientno
    where date(tbltransaction.dtmdatetime) = now()`, (err,results,fields)=>{
      if (err) console.log(err);

      res.render('Admin-Queries/views/view', {selected: 1, re: results});
    });

});

router1.get('/doctors', (req,res)=>{

  db.query(``, (err,results,fields)=>{
    if (err) console.log(err);

  });
  res.render('Admin-Queries/views/view', {selected: 2});
});

router1.get('/transactions', (req,res)=>{
  db.query(``, (err,results,fields)=>{
    if (err) console.log(err);

  });

  // db.query(``, (err,results,fields)=>{
  //   if (err) console.log(err);
  //
  // });
  res.render('Admin-Queries/views/view', {selected: 3});
});




exports.Admin_Queries= router1;
