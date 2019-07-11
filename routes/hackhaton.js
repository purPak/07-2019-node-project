const express = require('express');
var path = require('path');
const bodyParser = require('body-parser');
//Set up express router
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
//Route that show registration-form
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
router.post('/hackhaton/confirmation',(req,res)=>{
     res.render("hackhaton/confirmation.html", {name: req.body.name});
});

module.exports = router;