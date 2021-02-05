function PostView(props) {
    const removePost = async () => {
        if(window.confirm('게시물을 삭제하시겠습니까?\n삭제된 게시물은 복구할 수 없습니다.')){
            Axios.post('http://localhost:3306/deleteContent', {
                title: postContent.title,
                content: postContent.content
            }).then(() => {
                alert('게시글이 삭제되었습니다');
                const { goto } = { goto: { pathname: "/" } };
                <Redirect to={goto} />
            })
        }
    }
    const editPost = async () => {
        <Route path="/write" render={() => <WritePost posttitle={props.title}/>} />
    }
    // 작성자와 보는사람이 같으면 수정/삭제 버튼 표시
    const showButton = () => {

    }

    return(
        <div>
            
        </div>
    );
}

export default PostView;