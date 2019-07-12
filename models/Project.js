const mongoose = require('mongoose');


const ProjectSchema = new mongoose.Schema({
    name : String,
    description : String,
    students : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Student"
        }
    ]
});

const Project = mongoose.model('Project', ProjectSchema, 'project');

module.exports = Project;
