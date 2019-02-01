const express = require("express");
const Celebrity = require("../models/Celebrity");
// const Student = require('../models/Student');
const router = express.Router();

router.get("/", (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      res.render("celebrities/index", { celebrities });
    })
    .catch(err => {
      console.log(error);
    });
});

router.get('/celebrities/:celebrityId', (req,res,next) => {
  Promise.all([
    Celebrity.findById(req.params.celebrityId),
    // Student.find({ _campus: req.params.campusId }),
  ])
    .then(values => { // .then triggered when both promises are resolved
      let campus = values[0]
      let students = values[1]
      res.render('campus-detail', {celebrity})
    })
});

module.exports = router;
