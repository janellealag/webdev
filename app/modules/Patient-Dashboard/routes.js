
var express = require('express');
var router = express.Router();
var authMiddleware = require('../../core/auth');
var db = require('../../lib/database')();
// router.use(authMiddleware.noAuthed);


router.get('/',  (req,res)=>{
  
	
           db.query(`Select * from tblPatient  where intPatientNo = 1 `, (err,results,fields)=>{
   console.log(results);

    res.render('Patient-Dashboard/views/view.ejs', {re: results} );
  });

});





exports.Patient_Dashboard= router;
