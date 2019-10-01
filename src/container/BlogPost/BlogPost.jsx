import React, { Component, Fragment } from 'react';
import './BlogPost.css';
import Post from '../../component/Post/Post';


class BlogPost extends Component {

    render() {
        return (
            <Fragment>
                <div className="post">
                    <div className="thumb-img">
                        <img src="https://www.w3schools.com/css/rock600x400.jpg" alt="Image"/>
                    </div>
                    <Post 
                        title="What is Lorem Ipsum?" 
                        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                         remaining essentially unchanged."/>
                </div>
            </Fragment>
        )
    }

}

export default BlogPost;