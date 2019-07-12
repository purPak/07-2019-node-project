const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    firstname : String,
    lastname : String
});

StudentSchema.virtual('projects', {
    ref : 'Project',
    localField : '_id',
    foreignField : 'students'
});

const Student = mongoose.model('Student', StudentSchema, 'student');

module.exports = Student;
