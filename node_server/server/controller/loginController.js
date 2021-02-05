const pool = require('../config/dbconfig')


class LoginController{

    async userSignUp(req, res){
        pool.getConnection((err, conn)=>{
            if(err) throw err

            if(req.user){

                let userInfo = req.user

                conn.query('select * from users where user_id = ? and user_name = ? and email_provider = ?',[
                    userInfo.id, userInfo.displayName ,userInfo.provider
                ], (err, checkId)=>{
                    if(err) throw err

                    if(checkId.length){
                        conn.release()
                        res.send({
                            state:'이미 가입된 아이디 있음',
                            userInfo:{
                                id:userInfo.id,
                                userName:userInfo.displayName,
                                email:userInfo.provider
                            }
                        })
                    }
                    else{
                        conn.query('insert into users values(?,?,?)',[
                            userInfo.id, userInfo.provider, userInfo.displayName
                        ], (err)=>{
                            if(err) throw err

                            conn.release()
                            res.send({
                                state:'새로운 회원',
                                userInfo:{
                                    id:userInfo.id,
                                    userName:userInfo.displayName,
                                    email:userInfo.provider
                                }
                            })
                        })
                    }
                })
            }
            else{
                conn.release()
                res.send({
                    state:'login fail'
                })
            }
        })
    }

}

module.exports = LoginController