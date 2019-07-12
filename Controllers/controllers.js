const mongoose = require('mongoose');
const Hackhatons = require('../Model/model');

exports.list_all_hackhatons = (req, res) => {
  Hackhatons.find({}, (err, block) => {
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
  let new_block = new Hackhatons(req.body);

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