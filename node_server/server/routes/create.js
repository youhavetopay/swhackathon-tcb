var express = require('express')
var router = express.Router()

//컨트롤러 연결
const CreateController = require('../controller/createController')
const Createcontent = new CreateController()

// 글 생성
router.post('/createContent', Createcontent.createContent, (req, res)=>{
  if(req.contenState){
        res.send({
            state:'success'
        })
    }
})

module.exports = router
