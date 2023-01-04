var express = require('express');
var router = express.Router();
const querySql = require('../db/index')


/* register api */
router.get('/register', function(req, res, next) {
  let {username, password, nickname} = req.body
  querySql('select * from user where username = ?', [username]).then(res => {
    console.log(res)
    if(!res || res.length === 0){
      // querySql('insert into user(username, password, nickname) value(?,?,?)', [username, password, nickname])
    }else{
      res.send({code:-1, msg:'this account already exists.'})
    }
  }).catch(e=>{
    console.log(e)
  })
});

module.exports = router;
