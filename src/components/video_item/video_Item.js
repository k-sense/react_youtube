import React from 'react';
import styles from './video_item.module.css';

// props.video.snippet => props의 video롤 바로 deconstruncting
// + video안에있는 snippet만 받아옴.
const VideoItem = ({ video, video: { snippet }, onVideoClick, display }) => {
	const displayType = display === 'list' ? styles.list : styles.grid;

	return (
		<li
			className={`${styles.container} ${displayType}`}
			onClick={() => {
				onVideoClick(video);
			}}
		>
			<div className={styles.video}>
				<img
					className={styles.thunbnail}
					src={snippet.thumbnails.medium.url}
					alt="video thumbnail"
				></img>
				<div className={styles.metadata}>
					<p className={styles.title}>{snippet.title}</p>
					<p className={styles.channel}>{snippet.channelTitle}</p>
				</div>
			</div>
		</li>
	);
};

export default VideoItem;
