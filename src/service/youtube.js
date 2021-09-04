import axios from 'axios';

class Youtube {
	constructor(key) {
		this.key = key;
	}

	async mostPopular() {
		const result = await axios.get(
			`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`
		);
		return result.data.items;
	}

	async search(query) {
		const response = await axios.get(
			`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`
		);
		return response.data.items.map((item) => ({
			...item,
			id: item.id.videoId,
		}));
	}
}

export default Youtube;
