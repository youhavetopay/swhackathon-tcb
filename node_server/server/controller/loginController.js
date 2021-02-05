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
                        res.redirect('https://www.tensorflow.org/')
                        
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
                            res.redirect('https://www.tensorflow.org/')
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

}

module.exports = LoginController