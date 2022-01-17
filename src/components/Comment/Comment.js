import React from 'react';

const Comment = (props) => {
    let{postId,key,name,email,body}=props;
    return (
        <div>
            <li>postId-{postId}</li>
            <li>key-{key}</li>
            <li>name-{name}</li>
            <li>email-{email}</li>
            <li>body-{body}</li>
        </div>
    );
};

export default Comment;