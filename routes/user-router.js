const router = require('express').Router();
const DB = require('./user-model.js');
//const DBM = require("../database/db-config.js");

router.get('/', (req, res) => {
  DB.findAll()
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).json({ err: 'Server Error' });
    });
});

router.post('/', (req, res) => {
  const newUser = req.body;
  //console.log(newUser);
  DB.addUser(newUser)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err: 'Server Error' });
    });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  console.log(id);
  DB.removeUser(id)
    .then((id) => {
      res.status(200).json(id);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err: 'Server Error' });
    });
});

module.exports = router;
