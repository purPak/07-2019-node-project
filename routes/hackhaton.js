const express = require('express');
var path = require('path');
//Set up express router
const router = express.Router();

//Route that show registration-form
router.get('/',(req,res)=>{
    res.send("Homepage");
});

//Route that show registration-form
router.get('/new',(req,res)=>{
    res.sendFile(path.resolve('formulaire.html'));
    //res.send("formulaire");
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