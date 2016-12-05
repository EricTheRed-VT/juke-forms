import React from 'react';
import SongAdder from './SongAdder';

class SongAdderContainer extends React.Component {
	constructor(props) {
		super(props)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(event) {
		event.preventDefault();
		// this.makePlaylist();
		// this.setState({ 
		// 	inputValue: '',
		// 	submitButtonDisabled: true
		// })
	}

	render() {
		return (
			<SongAdder songs={[]} handleSubmit={this.handleSubmit} />
		)
	}
}



export default SongAdderContainer;