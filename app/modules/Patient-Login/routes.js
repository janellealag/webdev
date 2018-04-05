var express = require('express');
var router1 = express.Router();

var db = require('../../lib/database')();

//var authMiddleware = require('./middlewares/auth');

router1.get('/', (req,res)=>{
  res.render('Patient-Login/views/view',{notif: '0'});
});

router1.post('/', (req,res)=>{




      db.query(`SELECT * FROM tblPatient WHERE strEmail = "${req.body.username}" AND strPassword ="${req.body.password}"`, (err,results,fields)=>{


      	   if(results == 'undefined' || results == 'NULL' || results.length == 0 ){
      	   	    res.render('Patient-Login/views/view',{notif: '1'});

      	   }
      	   else{
            req.session.user = results[0];
            //console.log(`${req.session.user.strPatientFname}`);
			   	res.redirect("/Patient_Dashboard");
      	   }

      });



});


exports.Patient_Login = router1;
