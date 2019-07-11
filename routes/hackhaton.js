const express = require('express');

//Set up express router
const router = express.Router();

//Route that show registration-form
router.get('/',(req,res)=>{
    res.send("Homepage");
});

//Route that show registration-form
router.get('/new',(req,res)=>{
    res.send("formulaire");
});

//Route that add registration-form in db  
router.post('/',(req,res)=>{
    res.send("Post form");
});

module.exports = router;