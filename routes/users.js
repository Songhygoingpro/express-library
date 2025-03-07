var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET cool page. */
router.get('/cool', function(req, res, next) {
  res.send("You're so cool");
});

/* GET user by userId. */
router.get('/:userId', function(req, res, next) {
  const { userId } = req.params;
  res.send(`User ID: ${userId}`);
});

module.exports = router;