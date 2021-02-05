const pool = require('../config/dbconfig')


class LoginController{

    async userSignUp(req, res){
        pool.getConnection((err, conn)=>{
            if(err) throw err

            if(req.user){

                let userInfo = req.user

                conn.query('select * from users where user_id = ? and email_provider = ?',[
                    userInfo.id ,userInfo.provider
                ], (err, checkId)=>{
                    if(err) throw err

                    if(checkId.length){
                        conn.release()
                        req.session.user = {
                            id:userInfo.id,
                            userName:userInfo.displayName,
                            email:userInfo.provider
                        }
                        console.log(req.session.user, '  logintest');
                        res.redirect('http://localhost:3002/login/loginInfo')
                        
                    }
                    else{
                        conn.query('insert into users values(?,?,?)',[
                            userInfo.id, userInfo.provider, userInfo.displayName
                        ], (err)=>{
                            if(err) throw err

                            conn.release()
                            req.session.user = {
                                id:userInfo.id,
                                userName:userInfo.displayName,
                                email:userInfo.provider
                            }
                            console.log(req.session.user, '  logintest');
                            res.redirect('http://localhost:3002/login/loginInfo')
                        })
                    }
                })
            }
            else{
                conn.release()
                res.send({
                    state:'fail'
                })
            }
        })
    }

    async addUserInfo(req, res, next){
        pool.getConnection((err, conn)=>{
            if(err) throw err

            let userInfo = req.body.userInfo

            
            conn.query('select * from users where user_id = ? and email_provider = ?',[
                userInfo.googleId, userInfo.email
            ], (err, checkId)=>{
                if(err) throw err

                if(checkId.length <= 0){
                    conn.query('insert into users values(?,?,?)',[
                        userInfo.googleId, userInfo.email, userInfo.name
                    ], (err)=>{
                        if(err) throw err
                        conn.release()
                        res.json({
                            state:'success',
                            log:'신규회원',
                            userInfo:{
                                user_id:userInfo.googleId,
                                userEmail: userInfo.email,
                                userName:userInfo.name
                            }
                        })
                    })
                }
                else{
                    conn.release()
                        res.json({
                            state:'success',
                            log:'기존회원',
                            userInfo:{
                                user_id:userInfo.googleId,
                                userEmail: userInfo.email,
                                userName:userInfo.name
                            }
                        })
                }
            })

            

        })
    }


    async getUserInfo(req, res, next){
        pool.getConnection((err, conn)=>{
            if(err) throw err

            let userId = req.body.userId
            

            conn.query('select * from users where user_id = ? and email_provider = ?',[
                userId, pw
            ], (err, checkId)=>{
                if(err) throw err

                if(checkId.length <= 0){
                    conn.release()

                    res.json({
                        state:'fail',
                        log:'입력한 정보의 회원이 없습니다.'
                    })
                }
                else{
                    req.userInfo = checkId
                    conn.release()
                    next()
                }
            })
        })
    }

}

module.exports = LoginController