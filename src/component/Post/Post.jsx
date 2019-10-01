import React from 'react';

const Post = (props) => {
    return (
        <div className="card">
            <h1 className="title">{props.title}</h1>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

export default Post;