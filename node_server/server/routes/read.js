var express = require('express')
var router = express.Router()

const ReadController = require('../controller/readController')
const Read = new ReadController()


// 글 상세내역 표시
router.get('/readContent', Read.getContent, (req, res)=>{

    if(req.commentList){
      res.send({
        contentInfo:req.contentInfo,
        likeCount:req.likeCount,
        commentList:req.commentList
      })
    }
})


// 댓글 추가 API
router.post('/add/:contentNum', Read.addComment,(req, res)=>{
  
  if(req.addCommetState){
    res.send({
      state:'success'
    })
  }
})


// 공감 추가
router.post('/add/like/:contentNum', Read.addLikeContent,(req, res)=>{

  if(req.addLikeContentState){
    res.send({
      state:'success'
    })
  }
  else{
    res.send({
      state:'fail',
      log:'이미 공감을 누른 글 입니다.'
    })
  }
})

module.exports = router
