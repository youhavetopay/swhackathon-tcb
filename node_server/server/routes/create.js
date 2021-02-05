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

// 글 수정
router.post('/updateContent', Createcontent.updateContent, (req, res)=>{
  if(req.contenUpdateState){
        res.send({
            state:'success'
        })
    }
})

// 글 삭제
router.post('/deleteContent', Createcontent.deleteContent, (req, res)=>{
  if(req.contenDeleteState){
        res.send({
            state:'success'
        })
    }
})

module.exports = router
