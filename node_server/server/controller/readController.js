const pool = require('../config/dbconfig')


let moment = require('moment');
require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");

class ReadController {

  // 글 상세내역 가져오기
  async getContent(req, res, next) {
    let comment_num = req.params.commentNum

    pool.getConnection((err, conn) => {
      if (err) throw err

      conn.query('SELECT c.content_title, c.content_con, c.content_count, c.de_cate_name, cp.pic_path FROM content AS c JOIN content_pic AS cp ON c.content_num = cp.content_num  WHERE c.content_num = ?', [
        comment_num
      ], (err, contentInfo) => {
        if (err) throw err

        req.contentInfo = contentInfo

        conn.query('SELECT COUNT(user_id) AS like_count FROM like_list WHERE content_num = ?', [
          comment_num
        ], (err, likeCount) => {
          if (err) throw err

          req.likeCount = likeCount

          conn.query('SELECT comment_con, user_id, comment_date FROM comment_list WHERE content_num = ? order by comment_date desc', [
            comment_num
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

      conn.query('insert into comment_list values(?,?,?,?,?)', [
        null, commentCon, nowTime, userId, contentNum
      ], (err) => {
        if (err) throw err

        req.addCommetState = true

        conn.release()
        next()

      })
    })
  }

  // 댓글 수정
  async editComment(req, res, next) {
    pool.getConnection((err, conn) => {
      if (err) throw err

      let commentNum = req.params.commentNum
      let comment_con = req.body.commentCon
      let userId = req.body.userId

      req.editCommentState = false

      conn.query(`SELECT * FROM SWHack.comment_list where user_id = ? and comment_num = ?`, [
        userId, commentNum
      ], (err, checkId) => {
        if (err) throw err;

        if (checkId.length <= 0) {
          conn.release()
          next()
        } else {
          conn.query('update comment_list set comment_con = ? where comment_num = ?', [
            comment_con, commentNum
          ], (err) => {
            if (err) throw err

            req.editCommentState = true
            conn.release()
            next()
          })
        }
      })
    })
  }

  // 댓글 삭제
  async deleteComment(req, res, next) {
    pool.getConnection((err, conn) => {
      if (err) throw err

      let commentNum = req.params.commentNum
      let userId = req.body.userId
      req.deleteCommentState = false

      conn.query(`SELECT * FROM comment_list where user_id = ? and comment_num = ?`, [
        userId, commentNum
      ], (err, checkId) => {
        if (err) throw err

        if (checkId.length <= 0) {
          conn.release()
          next()
        } else {
          conn.query(`delete from comment_list where comment_num = ?`, [
            commentNum
          ], (err) => {
            if (err) throw err

            req.deleteCommentState = true
            conn.release()
            next()
          })
        }
      })

    })
  }


  // 공감 추가
  async addLikeContent(req, res, next) {
    pool.getConnection((err, conn) => {
      if (err) throw err

      let nowTime = moment().format('YYYY-MM-DD HH:mm:ss');
      let userId = 'test'
      let contentNum = req.params.contentNum

      req.addLikeContentState = false

      conn.query('insert into like_list values(?,?,?)', [
        nowTime, userId, contentNum
      ], (err) => {
        if (err) {
          conn.release()
          next()
        } else {
          req.addLikeContentState = true
          conn.release()
          next()
        }
      })
    })
  }

  // 공감 삭제
  async deleteLikeContent(req, res, next) {
    pool.getConnection((err, conn) => {
      if (err) throw err

      let contentNum = req.params.contentNum
      let userId = req.body.userId

      req.deleteLikeContentState = false


      conn.query('select * from like_list where user_id = ? and content_num = ?', [
        userId, contentNum
      ], (err, checkId) => {
        if (err) throw err

        if (checkId.length <= 0) {
          conn.release()
          next()

        } else {
          conn.query('delete from like_list where user_id = ? and content_num = ?', [
            userId, contentNum
          ], (err) => {
            if (err) throw err

            conn.query('update content set content_count = content_count-1 where content_num = ?', [
              contentNum
            ], (err) => {
              if (err) throw err

              req.deleteLikeContentState = true
              conn.release()
              next()

            })
          })
        }
      })
    })
  }
}

module.exports = ReadController
