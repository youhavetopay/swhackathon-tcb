var express = require('express')
var router = express.Router()
var passport = require('../config/passport.js')

var LoginController = require('../controller/loginController')
var Login = new LoginController()

var cors = require('cors')
router.use(cors())

// 임시로 만든 로그인
router.get('/signIn', Login.userSignUp, (req, res)=>{

    if(req.userInfo){
        res.json({
            state:'success',
            userInfo:req.userInfo
        })
    }
    else{
        res.json({
            state:'fail',
            log:'입력한 정보의 회원이 없습니다.'
        })
    }

})

router.get('/logout', (req,res)=>{
    req.logOut();
    res.send({
        state:'logout'
    })
})

router.post('/google/signup', Login.addUserInfo, (req, res)=>{

})

router.get('/userinfo', (req,res)=>{
    console.log(req.session.user, ' session ');
    res.json(req.session.user)
})

router.get('/loginInfo', (req, res)=>{
    console.log(req.user, '  logininfo');
    req.session.user = req.user
    console.log(req.session.user.id, '   session id');
    res.json(req.user)
})

router.get('/google', passport.authenticate('google', {scope:['profile','email']}))

router.get('/google/callback', passport.authenticate('google'), authSuccess)

function authSuccess(req, res){
    console.log(req.user.provider);
    req.session.user = req.user
    console.log(req.session.user, ' sesion');
    res.redirect('/login/loginInfo')
}


module.exports = router