import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_List';

function App() {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		axios
			.get(
				'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAV5Q8_5cbKxRoKiLORukLxrE5wfEdk9Pk'
			)
			.then((result) => {
				console.log(result.items);
				setVideos(result.data.items);
				// result.data.items.map((item) => setVideos(item.snippet.title));
			});
	}, []);
	return (
		<div>
			<VideoList videos={videos}></VideoList>
		</div>
	);
}

export default App;
