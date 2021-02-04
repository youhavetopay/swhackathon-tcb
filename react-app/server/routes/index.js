var express = require('express')
var router = express.Router()

const IndexController = require('../controller/indexController')
const Index = new IndexController()

router.get('/', Index.getTestValue, (req, res)=>{
    
    res.send({greeting:'hello React x nodejs', userInfo:req.userInfo[0]})
})

module.exports = router