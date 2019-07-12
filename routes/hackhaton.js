const express = require('express');
const mongoose = require('mongoose');

//Import Models

const Student = require('../models/Student');

//Set up express router
const router = express.Router();

//Route that show the homepage
router.get('/',(req,res)=>{
    res.render('hackhaton/index.html');
});

//Route that show registration-form
router.get('/new',(req,res)=>{
    res.render("hackhaton/formulaire.html");
});

//Route that add registration-form in db  
router.post('/',(req,res)=>{
    res.send("Post form");
});

module.exports = router;