import React from 'react';
import NewPlaylist from './NewPlaylist';
import Songs from './Songs';
import axios from 'axios';

class NewPlaylistContainer extends React.Component {
	constructor (props) {
		super(props)
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.validateInput = this.validateInput.bind(this);
		this.makePlaylist = this.makePlaylist.bind(this);
		this.state = {
			inputValue: '',
			submitButtonDisabled: true,
			inputChanged: false,
			showAlert: false
		}
	}

	validateInput(val) {
		if (val.length > 16) {
			this.setState({ 
				submitButtonDisabled: true,
				showAlert: true
			})
		} else if (val.length < 1 && this.state.inputChanged) {
			this.setState({ 
				submitButtonDisabled: true,
				showAlert: true
			})
		} else if (val.length < 1) {
			this.setState({ 
				submitButtonDisabled: true,
				showAlert: false
			})
		} else {
			this.setState({ 
				submitButtonDisabled: false,
				showAlert: false
			})
		}
	}

	handleChange(event) {
		const val = event.target.value
		this.setState({ 
			inputValue: val,
			inputChanged: true

		});
		this.validateInput(val);
		// if (this.state.submitButtonDisabled && this.state.inputChanged) this.setState({ showAlert: true }) 
	}

	handleSubmit(event) {
		event.preventDefault();
		this.makePlaylist();
		this.setState({ 
			inputValue: '',
			submitButtonDisabled: true
		})
	}

	makePlaylist() {
		axios.post('/api/playlists', {
				name: this.state.inputValue
			})
			.then(res => res.data)
			.then(result => {
				this.props.addPlaylist(result)
		});
	}

	render () {
		const inputValue = this.state.inputValue;
	    const filteredSongs = this.props.currentSongList && this.props.currentSongList.filter(song =>
	    	song.name.toLowerCase().match(inputValue.toLowerCase())
	    )

	    return (
	    	<div>
				<NewPlaylist 
					handleChange={this.handleChange} 
					handleSubmit={this.handleSubmit} 
					inputValue={this.state.inputValue} 
					inputChanged={this.state.inputChanged}
					submitButtonDisabled={this.state.submitButtonDisabled} 
					showAlert={this.state.showAlert}
				/>
				<Songs songs={filteredSongs} />
			</div>
		)
	}
}




export default NewPlaylistContainer;