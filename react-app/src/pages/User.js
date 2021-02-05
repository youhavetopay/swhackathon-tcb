function User({ user }) {
    const { id, name, email } = user || {};
    return (
        <div>
            <h1>User Profile</h1>
            <dt>아이디</dt>
            <dd>{id}</dd>
            <dt>닉네임</dt>
            <dd>{name}</dd>
            <dt>이메일</dt>
            <dd>{email}</dd>
        </div>
    );
}

export default User;