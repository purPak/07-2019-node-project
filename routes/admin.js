const express = require('express');

//Set up express router
const router = express.Router();

//Route that show all students 
router.get('/',(req,res)=>{
    res.render('admin/index.html');
});

module.exports = router;
