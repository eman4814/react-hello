import React, { Component } from 'react';
// import YouTubeComponent from '../../component/youtube/YouTubeComponent';
import Product from '../product/Product';
// import BlogPost from '../BlogPost/BlogPost';

class Home extends Component {

	render() {
		return (
			<div>
				{/*<p>Youtube Component</p>
				<hr/>
				<YouTubeComponent time="7.00" title="Tutorial ReactJS-Bagian 1" desc="10x ditonton, 1 hari yang lalu"/>
				<YouTubeComponent time="8.00" title="Tutorial ReactJS-Bagian 2" desc="20x ditonton, 5 hari yang lalu"/>
				<YouTubeComponent time="9.00" title="Tutorial ReactJS-Bagian 3" desc="30x ditonton, 6 hari yang lalu"/>
				<YouTubeComponent time="10.00" title="Tutorial ReactJS-Bagian 4" desc="5x ditonton, 10 hari yang lalu"/>
				<YouTubeComponent/>*/}

				{/* <p>Product</p>
				<hr/> */}
				<Product />
				
				{/* <p>Blog Post</p>
				<hr />
				<BlogPost /> */}

			</div>
		)
	}
}

export default Home;