import React from 'react';
import './YouTubeComponent.css';


const YouTubeComponent = (props) => {
	return (
		<div className="youtube-wrapper"> 
			<div className="img-thumb">
				<img src="https://i.ytimg.com/vi/EbdwcqZAkN0/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDdKW__YqoHdxq2E9IeapFEpCAHaA" alt="" />
				<p className="time">{props.time}</p>
			</div>
			<p className="title">{props.title}</p>
			<p className="desc">{props.desc}</p>
		</div>
	)
}


YouTubeComponent.defaultProps = {
	time: '00.00',
	title: 'title here',
	desc: 'desc here'
}


export default YouTubeComponent;