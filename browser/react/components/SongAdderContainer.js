import React from 'react';
import SongAdder from './SongAdder';

class SongAdderContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedSongId: 0
		}
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(event) {
		const val = event.target.value
		this.setState({ 
			selectedSong: val
		});	
	}

	handleSubmit(event) {
		event.preventDefault();
		this.addSong(this.state.selectedSongId);
		this.setState({selectedSongId: 0);
	}

	addSong(id) {
		const playlist = this.props.selectedPlaylist;
		axios.post(`/api/playlists/${playlist.id}/songs`, {
				id: id
			})
			.then(res => res.data)
			.then(result => {
				this.props.addSongToPlaylist(result)
		});
	}

	

	render() {
		return (
			<SongAdder songs={[]} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
		)
	}
}



export default SongAdderContainer;