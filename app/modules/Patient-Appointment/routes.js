
var express = require('express');
var router = express.Router();
var authMiddleware = require('../../core/auth');
var db = require('../../lib/database')();
// router.use(authMiddleware.noAuthed);


router.get('/',  (req,res)=>{

	res.render('Patient-Appointment/views/view');

});

router.post('/addAppointment', (req,res)=>{
  db.query(`Insert into tbl (intPatientNo, intClinicNo, dtmDateTime, strRemarks) values (${req.session.user.intPatientNo}, ${req.body.clinic}, ${req.body.date}, ${req.body.complain})`, (err,result,fields)=>{
    if (err) console.log(err);

    res.render('Patient-Appointment/views/view');

  });

});





exports.Patient_Appointment= router;
