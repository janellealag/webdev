var express = require('express');
var router = express.Router();
var router2 = express.Router();

var db = require('../../lib/database')();

//var authMiddleware = require('./middlewares/auth');



router.get('/', (req,res)=>{

  db.query(`Select * from tblPatient `, (err,results,fields)=>{
    if (err) console.log(err);

    res.render('Admin-Transaction-Collection/views/patientRecord', {re: results} );
  });

});








exports.Admin_Collection= router;


