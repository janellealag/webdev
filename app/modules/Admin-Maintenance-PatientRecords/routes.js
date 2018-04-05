var express = require('express');
var router = express.Router();
var router2 = express.Router();

var db = require('../../lib/database')();

//var authMiddleware = require('./middlewares/auth');



router.get('/', (req,res)=>{

  db.query(`Select * from tblPatient `, (err,results,fields)=>{
    if (err) console.log(err);

    res.render('Admin-Maintenance-PatientRecords/views/patientRecord', {re: results} );
  });

});

router.post('/', (req,res)=>{

console.log(req.body.age);
  db.query(`Insert into tblPatient (strPatientFname, strPatientMname, strPatientLname, strPatientAddress, strPatientPhone, strPatientMobile, intPatientStatus, dtmBirthday, strGender, strEmail, strPassword) 
                           Values ("${req.body.fname}", "${req.body.mname}", "${req.body.lname}", "${req.body.address}", "${req.body.phone}", "${req.body.mobile}", ${1}, "${req.body.age}",  "${req.body.gender}", "${req.body.email}" , "${req.body.password }" ) `, (err,results,fields)=>{

    if (err) console.log(err);

    db.query(`Select * from tblpatient`, (err,resu,fields)=>{
      if (err) console.log(err);

      res.render('Admin-Maintenance-PatientRecords/views/patientRecord', {re: resu} );
    });
  });

});




router2.get('/', (req,res)=>{

  
  db.query(`SELECT * FROM tblPatient ORDER BY 1 DESC LIMIT 1`, (err,results,fields)=>{
      var id= results[0].intPatientNo;
      console.log(id);
     db.query(`INSERT INTO tblteeth(intPatientNo, int11, int12, int13, int14, int15, int16, int17, int18, int21, int22, int23, int24, int25, int26, int27, int28, int31, int32, int33, int34, int35, int36, int37, int38, int41, int42, int43, int44, int45, int46, int47, int48) VALUES (${id},1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1)`, (err,res,fields)=>{   
      });
        res.render('Admin-Maintenance-PatientRecords/views/teethCondition', {re: results});
 
 });

});

exports.Admin_PatientRecord= router;
exports.Admin_TeethCondition= router2;

