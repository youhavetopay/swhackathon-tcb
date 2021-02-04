const pool = require('../dbconfig/dbconfig')


let moment = require('moment');
require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");

class ReadController {

  // 글 상세내역 가져오기
  async getContent(req, res, next) {
    pool.getConnection((err, conn) => {
      if (err) throw err

      conn.query('SELECT c.content_title, c.content_con, c.content_count, c.de_cate_name, cp.pic_path FROM content AS c JOIN content_pic AS cp ON c.content_num = cp.content_num  WHERE c.content_num = ?', [
        1 //수정할 content_num
      ], (err, contentInfo) => {
        if (err) throw err

        req.contentInfo = contentInfo

        conn.query('SELECT COUNT(user_id) AS like_count FROM like_list WHERE content_num = ?', [
          1 //수정할 content_num
        ], (err, likeCount) => {
          if (err) throw err

          req.likeCount = likeCount

          conn.query('SELECT comment_con, user_id, comment_date FROM comment_list WHERE content_num = ? order by comment_date desc', [
            1 //수정할 content_num
          ], (err, commentList) => {
            if (err) throw err

            req.commentList = commentList

            conn.release()
            next();
          })
        })
      })
    })
  }

  // 댓글 추가
  async addComment(req, res, next) {
    pool.getConnection((err, conn) => {
      if (err) throw err;

      let contentNum = req.params.contentNum
      let commentCon = req.body.commentCon
      let userId = 'test'
      let nowTime = moment().format('YYYY-MM-DD HH:mm:ss');
      req.addCommetState = false

      conn.query('insert into comment_list values(?,?,?,?,?)',[
        null, commentCon, nowTime, userId, contentNum
      ], (err)=>{
        if (err) throw err

        req.addCommetState = true

        conn.release()
        next()

      })
    })
  }

  async addLikeContent(req, res, next){
    pool.getConnection((err, conn)=>{
      if(err) throw err

      let nowTime = moment().format('YYYY-MM-DD HH:mm:ss');
      let userId = 'test'
      let contentNum = req.params.contentNum

      req.addLikeContentState = false

      conn.query('insert into like_list values(?,?,?)',[
        nowTime, userId, contentNum
      ], (err)=>{
        if(err){
          conn.release()
          next()
        }
        else{
          req.addLikeContentState = true
          conn.release()
          next()
        }
      })
    })
  }
}

module.exports = ReadController