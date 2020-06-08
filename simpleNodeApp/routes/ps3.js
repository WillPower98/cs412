const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index',{
      greeting: 'how you doing jimbo'
  })
})

router.post('/', function(req, res, next) {
    res.render('index',{
        reply: `${req.body.reply}`
    })
})


module.exports = router;