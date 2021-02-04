var express = require('express')
var router = express.Router()

const ReadController = require('../controller/readController')
const Read = new ReadController()

router.get('/readContent', Read.getContent, (req, res)=>{

    if(req.commentList){
      res.send({
        contentInfo:req.contentInfo,
        likeCount:req.likeCount,
        commentList:req.commentList
      })
    }
})

module.exports = router
