var express = require('express');
var router1 = express.Router();

var db = require('../../lib/database')();

//var authMiddleware = require('./middlewares/auth');

router1.get('/', (req,res)=>{
  res.render('Admin-Dashboard/views/view');
});




exports.Admin_Dashboard= router1;

