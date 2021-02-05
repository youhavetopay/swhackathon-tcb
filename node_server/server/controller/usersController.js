// dbconfig에 있는 연결정보 가져오기
const pool = require('../config/dbconfig')

// 컨트롤러 클래스
class UsersController {

  // user 읽기
  async readUser(req, res, next) {
    //수정 data
    var user_id = req.body.user_id //req.body.user_id

    pool.getConnection((err, conn)=>{
        if (err) throw err

        conn.query('SELECT user_id, user_name FROM users WHERE user_id = ?', [
          user_id
        ], (err, userInfo)=>{
            if (err) throw err

            req.userInfo = userInfo
            conn.release()
            next();
        })
    })
  }

  // user 수정
  async updateUser(req, res, next) {
    //수정 data
    var user_id = req.body.user_id //req.body.user_id
    var user_name = req.body.user_name

    req.userUpdateState = false;

    pool.getConnection((err, conn)=>{
      if(err) throw err;

      conn.query('UPDATE users SET user_name = ? WHERE user_id = ?',[
        user_name, user_id
      ], (err)=>{
        if(err) throw err;

        req.userUpdateState = true;
        conn.release()
        next();
      })
    })
  }

  // user 삭제
  async deleteUser(req, res, next) {
    //수정 data
    var user_id = req.body.user_id //req.body.user_id

    req.userDeleteState = false;

    pool.getConnection((err, conn)=>{
      if(err) throw err;

      conn.query('DELETE FROM users WHERE user_id = ?',[
        user_id
      ], (err)=>{
        if(err) throw err;

        req.userDeleteState = true;
        conn.release()
        next();
      })
    })
  }

}

module.exports = UsersController
