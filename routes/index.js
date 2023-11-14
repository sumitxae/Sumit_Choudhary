var express = require('express');
var fs = require('fs');
const path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/skills',function(req,res,next) {
  res.render('skills');
})

router.get('/projects',function(req,res,next) {
  res.render('projects');
})

router.get('/resume',function(req,res,next) {
  const file = path.join(__dirname,'../public','SUMIT_CHOUDHARY_RESUME.pdf');
  res.sendFile(file);
})

module.exports = router;
