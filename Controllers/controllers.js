const mongoose = require('mongoose');
const Projet = require('../Model/model');

exports.list_all_hackhatons = (req, res) => {
  Projet.find({}, (err, block) => {
    if(err) res.end(err);
    res.json(block);
  });
}

exports.list_all_students = (req, res) => {
   Projet.find({}, (err, block) => {
    if(err) res.end(err);
    res.json(block);
  });
}
/*
Create a block
req : request from bowser
res : result send to bowser
*/
exports.create_a_hackhaton = (req, res) => {
  let elevesTab = [];

  for (var i = 0; i < req.body.nbForm; i++) {
    let eleve = {
    nom: req.body['nom' + i],
    prenom: req.body['prenom' + i],
    mail: req.body['mail' + i]
    }
    console.log(eleve);
      elevesTab.push(eleve);
  }
 // console.log(elevesTab);
  let projet = {
    nom: req.body.nom,
    prenom: req.body.prenom,
    projet: req.body.projet,
    description: req.body.description,
    eleves: elevesTab
  }
  let new_block = new Projet(projet);

  new_block.save((err, block) => {
      if(err){
        res.status(400);
        res.json({error: err.message});
      }
      else{
        res.json(block);
      }

    })

}