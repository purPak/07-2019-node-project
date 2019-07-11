
var path = require('path');
const bodyParser = require('body-parser');

module.exports = (app) => {

app.use(bodyParser.urlencoded({ extended: true }));

//Route of the home page
app.get('/',(req,res)=>{
    res.render('hackhaton/index.html');
});

//Route that show registration-form
app.get('/new',(req,res)=>{
    res.render("hackhaton/formulaire.html");
    //res.sendFile(path.resolve('formulaire.html'));
});

// put js in public
app.get('/formulaire.js',(req,res)=>{
    res.sendFile(path.resolve('formulaire.js'));
    //res.send("formulaire");
});

// admin back office
app.get('/admin',(req,res)=>{
    res.render('admin/index.html');
});

//Route that add registration-form in db  
app.post('/hackhaton/confirmation',(req,res)=>{
    res.render("hackhaton/confirmation.html", {name: req.body.name});
});
}
