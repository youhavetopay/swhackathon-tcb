function PostView(props) {
    const removePost = async () => {
        if(window.confirm('게시물을 삭제하시겠습니까?\n삭제된 게시물은 복구할 수 없습니다.')){
            Axios.post('http://localhost:3002/create/deleteContent/' + props.postnum).then(() => {
                alert('게시글이 삭제되었습니다');
                const { goto } = { goto: { pathname: "/" } };
                <Redirect to={goto} />
            })
        }
    }
    const editPost = async () => {
        <Route path="/write" render={() => <WritePost postnum={props.postnum}/>} />
    }
    // 작성자와 보는사람이 같으면 수정/삭제 버튼 표시
    const showButton = () => {
        return(
            <section>
                <button onClick={editPost}>수정</button>
                <button onClick={removePost}>삭제</button>
            </section>
        );
    }

    return(
        <div>
            {showButton}
        </div>
    );
}

export default PostView;