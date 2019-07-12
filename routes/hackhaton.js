const express = require('express');
const mongoose = require('mongoose');

//Import Models
const Student = require('../models/Student');

var path = require('path');

//Set up express router
const router = express.Router();

//Route that show the homepage
router.get('/',(req,res)=>{
    res.render('hackhaton/index.html');
});

//Route that show registration-form
router.get('/new',(req,res)=>{
    res.render("hackhaton/formulaire.html");
    //res.sendFile(path.resolve('formulaire.html'));
});

//Route that show registration-form
router.get('/formulaire.js',(req,res)=>{
    res.sendFile(path.resolve('formulaire.js'));
    //res.send("formulaire");
});
//Route that add registration-form in db  
router.post('/',(req,res)=>{
    res.send("Post form");
});

module.exports = router;