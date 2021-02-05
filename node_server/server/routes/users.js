var express = require('express');
var router = express.Router();

//컨트롤러 연결
const UsersController = require('../controller/usersController')
const users = new UsersController()

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// user 읽기
router.get('/readUser', users.readUser, (req, res)=>{
  if(req.userInfo){
    res.send({
      userInfo:req.userInfo
    })
  }
})

// user 수정
router.post('/updateUser', users.updateUser, (req, res)=>{
  if(req.userUpdateState){
        res.send({
            state:'success'
        })
    }
})

// user 삭제
router.post('/deleteUser', users.deleteUser, (req, res)=>{
  if(req.userDeleteState){
        res.send({
            state:'success'
        })
    }
})

module.exports = router;
