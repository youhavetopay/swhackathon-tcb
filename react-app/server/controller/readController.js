const pool = require('../dbconfig/dbconfig')

class ReadController {
  async getContent(req, res, next){
      pool.getConnection((err, conn)=>{
          if (err) throw err

          conn.query('SELECT c.content_title, c.content_con, c.content_count, c.de_cate_name, cp.pic_path FROM content AS c JOIN content_pic AS cp ON c.content_num = cp.content_num  WHERE c.content_num = ?',[
            1 //수정할 content_num
          ], (err, contentInfo)=>{
              if (err) throw err

              req.contentInfo = contentInfo

              conn.query('SELECT COUNT(user_id) AS like_count FROM like_list WHERE content_num = ?', [
                1 //수정할 content_num
              ], (err, likeCount)=>{
                if (err) throw err

                req.likeCount = likeCount

                conn.query('SELECT comment_con, user_id FROM comment_list WHERE content_num = ?', [
                  1 //수정할 content_num
                ], (err, commentList)=>{
                  if (err) throw err

                  req.commentList = commentList

                  conn.release()
                  next();
                })
              })
          })
      })
  }
}

module.exports = ReadController
