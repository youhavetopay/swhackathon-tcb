// dbconfig에 있는 연결정보 가져오기
const pool = require('../dbconfig/dbconfig')

// 사용하는 모듈이나 라이브러리 정의
let moment = require('moment');
require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");

// 컨트롤러 클래스
class CreateController {

  // 글 생성 
  async createContent(req, res, next) {
    //수정 data
    var title = 'test입니다.' //req.body.title
    var content = 'testtesttest!!!' //req.body.content
    var category = '테스트카테고리상세'
    var user_id = 'test'

    var contentCount = 0
    var date = moment().format('YYYY-MM-DD HH:mm:ss');

    req.contenState = false;

    pool.getConnection((err, conn)=>{
      if(err) throw err;

      conn.query('INSERT INTO content(content_title, content_con, content_date, content_count, de_cate_name, user_id) values(?,?,?,?,?,?)',[
        title, content, date, contentCount, category, user_id
      ], (err)=>{
        if(err) throw err;

        req.contenState = true;
        conn.release()
        next();
      })
    })
  }
}

module.exports = CreateController
