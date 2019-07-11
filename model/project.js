const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
    name : String,
    description : String,
    students : [
        {
            type : mongoose.Schema.Student.ObjectId,
            ref : "Student"
        }
    ]
})

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
