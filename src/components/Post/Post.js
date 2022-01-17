import React from 'react';

const Post = (props) => {
    let{userId,key,title,body}=props;
    return (
        <div>
            <li>UseId-{userId}</li>
            <li>key-{key}</li>
            <li>title-{title}</li>
            <li>body-{body}</li>
        </div>
    );
};

export default Post;