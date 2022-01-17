import React from 'react';
import {useEffect,useState} from "react";
import Post from "../Post/Post";

const Posts = () => {
    let [posts,setPosts]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value=>value.json())
            .then(value => setPosts(value));
    },[]);

    return (
        <div>
            {
               posts.map(value => <Post userId={value.userId} key={value.id}  title={value.title} body={value.body}/>)
            }
        </div>
    );
};

export default Posts;