const express = require('express');
const mongoose = require('mongoose');

//Import Models
const Project = require('../models/Project');
const Student = require('../models/Student');

//Set up express router
const router = express.Router();

//Route that show all projects 
router.get('/projects',(req,res)=>{
    Project.find({}).populate('students').then(projects=>{
        console.log(projects);
        res.render('admin/showProject.html', {projects : projects});
    })
});

//Route that show all students 
router.get('/students',(req,res)=>{
    Student.find().then(students=>{
        res.render('admin/index.html', {students : students});
        console.log(students);
    })
});

module.exports = router;
