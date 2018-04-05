var router = require('express').Router();
var db = require('../../lib/database')();

/**
 * Use the middleware to check all routes registered for this router.
 */
//var authMiddleware = require('../auth/middlewares/auth');
//router.use(authMiddleware.hasAuth);

router.get('/adminDashboard', (req,res)=>{
  res.render('admin/views/dashboard');
});


router.get('/treatment', (req,res)=>{

  db.query(`Select * from tbltreatment`, (err,results,fields)=>{
    if (err) console.log(err);

    res.render('admin/views/treatment', {re: results});
  });

});

router.get('/dentist', (req,res)=>{

  db.query(`Select * from tbldentist`, (err,results,fields)=>{
    if (err) console.log(err);

    res.render('admin/views/dentist', {re: results});
  });

});


router.get('/appointments', (req,res)=>{
  db.query(`SELECT * FROM tblappointment Join tblpatient on tblappointment.intUserID = tblpatient.intUserID `, (err, results, fields)=>{
    if (err) console.log(err);

    db.query(`Select * from tblpatient`, (erre,resul,fiel)=>{

      res.render('admin/views/appointments', {re: results, ce: resul});
    });

  });
});

router.get('/services', (req,res)=>{

    db.query(`Select * from tblservices`, (err,results,fields)=>{
      if (err) console.log(err);

      res.render('admin/views/services', {re: results});

    });


});

router.get('/payments', (req,res)=>{

  db.query(`Select * from tblpayment`, (err,results,fields)=>{
      if (err) console.log(err);

      res.render('admin/views/payments', {re: results});
  });

});


router.get('/queries', (req,res)=>{
  res.render('admin/views/queries');
});

router.get('/clinic', (req,res)=>{
  db.query(`Select * from tblClinic`, (err,results,fields)=>{
    if (err) console.log(err);

    res.render('admin/views/clinic', {re: results});
  });
});



router.post('/addTreatment', (req,res)=>{
    db.query(`Insert into tbltreatment (strTreatmentname, strDescription, estimatedPrice) values ("${req.body.treatment}", "${req.body.description}", "${req.body.estimated}")`, (err,results,fields)=>{
      if(err) console.log(err);

      db.query(`Select * from tbltreatment`, (err,resu,fields)=>{
        if (err) console.log(err);

        res.render('admin/views/treatment', {re: resu});
      });
    });
});

router.post('/addDentist', (req,res)=>{
  db.query(`Insert into tbldentist (strDentistFname, strDentistMname, strDentistLname, strDentistAddress, strDentistPhone, strDentistMobile, intDentistStatus, intDentistAge, strDentistEmail) values ("${req.body.fname}", "${req.body.mname}", "${req.body.lname}", "${req.body.address}", "${req.body.phone}", "${req.body.mobile}", ${1}, ${req.body.age}, "${req.body.email}" )`, (err,results,fields)=>{
      if(err) console.log(err);

      db.query(`Select * from tbldentist`, (err,resu,fields)=>{
        res.render('admin/views/dentist', {re: resu});
      });
  });
});

router.post('/editPatient', (req,res)=>{

  db.query(`Update tblpatient set strPatientFname = "${req.body.fname}", strPatientMname = "${req.body.mname}", strPatientLname = "${req.body.lname}", strPatientAddress = "${req.body.address}", strPatientPhone = ${req.body.phone}, strPatientMobile = "${req.body.mobile}", intAge = "${req.body.age}", strOccupation = "${req.body.occupation}", strGender = "${req.body.gender}", strEmail = "${req.body.email}" where intUserID = ${req.body.no}`, (err,results,fields)=>{
      if (err) console.log(err);

      db.query(`Select * from tblpatient`, (err,resu,fields)=>{
        if (err) console.log(err);

        res.render('admin/views/patientRecord', {re: resu} );
      });

  });
});

router.post('/editTreatment', (req,res)=>{
  db.query(`Update tbltreatment set strTreatmentname="${req.body.treatment}", strDescription="${req.body.description}", estimatedPrice="${req.body.price}" where intTreatmentNo="${req.body.no}"`, (err,results,fields)=>{
    if (err) console.log(err);

    db.query(`Select * from tbltreatment`, (err,resu,fields)=>{
      if (err) console.log(err);

      res.render('admin/views/treatment', {re: resu});
    });

  });
});

router.post('/editDentist', (req,res)=>{
  db.query(`Update tbldentist set strDentistFname="${req.body.fname}", strDentistMname="${req.body.mname}", strDentistLname="${req.body.lname}", strDentistAddress="${req.body.address}", strDentistPhone="${req.body.phone}", strDentistMobile="${req.body.mobile}", intDentistAge="${req.body.age}", strDentistEmail="${req.body.email}", strDentistGender="${req.body.gender}" where intUserID="${req.body.no}"`, (err,results,fields)=>{
    if (err) console.log(err);

    db.query(`Select * from tbldentist`, (err,resu,fields)=>{
      res.render('admin/views/dentist', {re: resu});
    });

  });
});


router.post('/addAppointment', (req,res)=>{
  db.query(`Insert into tblappointment (intUserID, appointmentDate, strTreatment, intStatus) values ("${req.body.patient}", "${req.body.date}", "${req.body.treat}", ${1})`, (err,results,fields)=>{
    if (err) console.log(err);

    db.query(`SELECT * FROM tblappointment Join tblpatient on tblappointment.intUserID = tblpatient.intUserID `, (erra, resultsa, fieldsa)=>{
      if (err) console.log(erra);

      db.query(`Select * from tblpatient`, (erre,resul,fiel)=>{
        res.render('admin/views/appointments', {re: resultsa, ce: resul});
      });

    });

  });
});

router.post('/editAppointment', (req,res)=>{
  db.query(`Update tblappointment set appointmentDate="${req.body.date}", strTreatment="${req.body.treat}" where intAppointmentNo="${req.body.no}"`, (err,results,fields)=>{
    if (err) console.log(err);

    db.query(`SELECT * FROM tblappointment Join tblpatient on tblappointment.intUserID = tblpatient.intUserID `, (erra, resultsa, fieldsa)=>{
      if (err) console.log(erra);

      db.query(`Select * from tblpatient`, (erre,resul,fiel)=>{
        res.render('admin/views/appointments', {re: resultsa, ce: resul});
      });

    });

  });
});

router.post('/addClinic', (req,res)=>{
  db.query(`Insert into tblClinic (strClinicName, strClinicDescription, strClinicLocation, intClinicStatus) values ("${req.body.name}", "${req.body.description}", "${req.body.location}", ${1})`, (err,results,fields)=>{
    if(err) console.log(err);

    db.query(`Select * from tblclinic`, (erre,resul,fiel)=>{
      if (erre) console.log(erre);

      res.render('admin/views/clinic', {re: resul});
    });
  });
});

router.post('/inactivateClinic', (req,res)=>{
  db.query(`Update tblClinic set intClinicStatus = "${0}" where intClinicNo="${req.body.num}"`, (err,results,fields)=>{
    if(err) console.log(err);

    db.query(`Select * from tblClinic`, (erre,resul,fiel)=>{

      res.render('admin/views/clinic', {re: resul});
    });
  });
});

router.post('/activateClinic', (req,res)=>{
  db.query(`Update tblClinic set intClinicStatus = "${1}" where intClinicNo="${req.body.num2}"`, (err,results,fields)=>{
    if(err) console.log(err);

    db.query(`Select * from tblClinic`, (erre,resul,fiel)=>{

      res.render('admin/views/clinic', {re: resul});
    });
  });
});

exports.admin = router;
