var express = require('express')
var router = express.Router()

//컨트롤러 연결은 이렇게
const ContentListController = require('../controller/contentListController')
const ContentList = new ContentListController() 

// 작성된 모든 글 가져오기 10개 최신순으로
router.get('/:page_num', ContentList.getCotnetList, (req, res)=>{

    if(req.topContent){
        res.send({
            state:'success',
            contentList:req.contentList,
            topContent:req.topContent
        })
    }
    else{
        res.send({
            state:'fail'
        })
    }

})

module.exports = router