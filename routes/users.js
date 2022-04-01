const express = require('express');
const router = express.Router();

// Routes

//Note - All functions below will be under /users
router.get('/', (req, res) => {
  res.send('User List');
});

router.get('/new', (req, res) => {
  res.send('User New Form');
});

router.post('/', (req, res) => {
  res.send('Create user');
});

//Get anything after : as id
router.get('/:id', (req, res) => {
  // req.params.id;
  res.send(`Get users with ID ${req.params.id}`);
});

router.put('/:id', (req, res) => {
  // req.params.id;
  res.send(`Get users with ID ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
  // req.params.id;
  res.send(`Get users with ID ${req.params.id}`);
});

// SAME as below:
router
  .route('/:id')
  .get((req, res) => {
    res.send(`Get users with ID ${req.params.id}`);
  })
  .post((req, res) => {
    res.send(`Post users with ID ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Put users with ID ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete users with ID ${req.params.id}`);
  });

module.exports = router;
