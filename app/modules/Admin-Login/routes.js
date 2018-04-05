var express = require('express');
var router1 = express.Router();

var db = require('../../lib/database')();

//var authMiddleware = require('./middlewares/auth');

router1.get('/', (req,res)=>{
  res.render('Admin-Login/views/login',{notif: '0'});
});

router1.post('/', (req,res)=>{

	
   

      db.query(`SELECT * FROM tblAdmin WHERE strEmail = "${req.body.username}" AND strPassword ="${req.body.password}"`, (err,results,fields)=>{
      	   

      	   if(results == 'undefined' || results == 'NULL' || results.length == 0 ){
      	   	    res.render('Admin-Login/views/login',{notif: '1'});
      	   	
      	   }
      	   else{
			   	res.redirect("/Admin_Dashboard");
      	   }
        
      });

  
   
});


exports.Admin_Login = router1;

