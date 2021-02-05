// dbconfig에 있는 연결정보 가져오기
const pool = require('../config/dbconfig')

// 사용하는 모듈이나 라이브러리 정의
let moment = require('moment');
require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");



class ContentListController {

    // 10개씩 카테고리에 상관없이 최신순으로 글 가져오기 and 오늘 기준으로 공감 많은 글 가져오기
    async getCotnetList(req, res, next){
        pool.getConnection((err, conn)=>{

            if(err) throw err;

            let page_num = parseInt(req.params.page_num)
            console.log(req.body);

            // 카테고리에 상관없이 글 10개 가져오기

            // 카테고리 선택 안했을 때
            if(!req.body.category){
                conn.query(`select content.* from(
                    select content_num, content_title, content_date, content_count, user_id, de_cate_name from content order by content_date DESC
                    ) as content
                    limit ?, 10`,[
                        page_num
                    ], (err, contentList)=>{
                        if(err) throw err;
    
                        req.contentList = contentList
    
                        // 오늘 기준으로 공감 많이 받은거 10개 가져오기 (오늘의 TOP10?)
                        conn.query(`select content.content_num, content.content_title, content.content_count, like_list.like_count  
                        from content, (select content_num, count(*) as like_count from like_list 
                                            where like_date > curdate() group by content_num 
                                            order by like_count DESC) as like_list  where content.content_num = like_list.content_num limit 10`,
                        (err, todayTopContent)=>{
                            if(err) throw err
    
                            req.contentList = contentList
                            req.topContent = todayTopContent
    
                            conn.release()
                            next()
                        })
                    })
            }
            else{

                //카테고리 선택했을 때
                conn.query(`select content.* from(
                    select content_num, content_title, content_date, content_count, user_id, de_cate_name from content order by content_date DESC
                    ) as content
                    where content.de_cate_name in (?)
                    limit ?, 10`,[
                        req.body.category,
                        page_num
                    ], (err, contentList)=>{
                        if(err) throw err;
    
                        req.contentList = contentList
    
                        // 오늘 기준으로 공감 많이 받은거 10개 가져오기 (오늘의 TOP10?)
                        conn.query(`select content.content_num, content.content_title, content.content_count, like_list.like_count  
                        from content, (select content_num, count(*) as like_count from like_list 
                                            where like_date > curdate() group by content_num 
                                            order by like_count DESC) as like_list  where content.content_num = like_list.content_num limit 10`,
                        (err, todayTopContent)=>{
                            if(err) throw err
    
                            req.contentList = contentList
                            req.topContent = todayTopContent
    
                            conn.release()
                            next()
                        })
                    })                
            }

        })
    }
}



module.exports = ContentListController