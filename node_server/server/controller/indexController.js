const pool = require('../dbconfig/dbconfig')

class IndexController {
    async getTestValue(req, res, next){
        pool.getConnection((err, conn)=>{
            if (err) throw err
            
            conn.query('select * from users',
            (err, userInfo)=>{
                if (err) throw err

                req.userInfo = userInfo
                conn.release()
                next();
            })
        })
    }
}

module.exports = IndexController